import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

const AcademicSemesters = () => {
  const { data } = useGetAllAcademicSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>Academic semesters</h2>
    </div>
  );
};

export default AcademicSemesters;
