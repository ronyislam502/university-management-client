import AcademicSemesters from "../pages/admin/Academic Management/AcademicSemesters";
import CreateSemester from "../pages/admin/Academic Management/CreateSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const adminRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Add Semester",
        path: "addSemester",
        element: <CreateSemester />,
      },
      {
        name: "Academic Semesters",
        path: "academicSemesters",
        element: <AcademicSemesters />,
      },
    ],
  },
];
