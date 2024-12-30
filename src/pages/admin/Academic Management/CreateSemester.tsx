import { Button, Col, Flex } from "antd";
import UMForm from "../../../components/form/UMForm";
import UMSelect from "../../../components/form/UMSelect";
import UMInput from "../../../components/form/UMInput";
import { FieldValues } from "react-hook-form";

const CreateSemester = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <UMForm onSubmit={onSubmit}>
          <UMInput type="text" name="name" label="Semester Name" />
          <UMInput type="text" name="name" label="Year" />
          <UMSelect />
          <Button htmlType="submit">Submit</Button>
        </UMForm>
      </Col>
    </Flex>
  );
};

export default CreateSemester;
