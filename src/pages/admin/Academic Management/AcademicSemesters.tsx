import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemeterApi";

const AcademicSemesters = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>Academic semesters</h2>
    </div>
  );
};

export default AcademicSemesters;
