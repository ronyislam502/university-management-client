import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UMForm from "../components/form/UMForm";
import UMInput from "../components/form/UMInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging In");
    try {
      const userinfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userinfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("logged in", { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "50vh" }}>
      <UMForm onSubmit={onSubmit}>
        <UMInput type="text" name="userId" label="ID" />
        <UMInput type="text" name="password" label="Password" />
        <Button htmlType="submit">LogIn</Button>
      </UMForm>
    </Row>
  );
};

export default Login;
