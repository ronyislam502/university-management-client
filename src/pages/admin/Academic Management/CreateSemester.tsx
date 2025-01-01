import { Button, Col, Flex } from "antd";
import UMForm from "../../../components/form/UMForm";
import UMSelect from "../../../components/form/UMSelect";
import { FieldValues } from "react-hook-form";
import { semesterOptions } from "../../../constant/semester";
import { monthOptions } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit = async (data: FieldValues) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    console.log(semesterData);
    try {
      const res = await addAcademicSemester(semesterData);
      console.log(res);
    } catch (error) {
      toast.error("somethings is wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={10}>
        <UMForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <UMSelect label="Name" name="name" options={semesterOptions} />
          <UMSelect label="Year" name="year" options={yearOptions} />
          <UMSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <UMSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </UMForm>
      </Col>
    </Flex>
  );
};

export default CreateSemester;
