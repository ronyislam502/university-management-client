import { Row } from "antd";
import UMForm from "../components/ui/form/UMForm";
import UMInput from "../components/ui/form/UMInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Row>
      <UMForm onSubmit={onSubmit}>
        <UMInput type="text" name="userId" label="ID" />
        <UMInput type="text" name="password" label="Password" />
      </UMForm>
    </Row>
  );
};

export default Login;
