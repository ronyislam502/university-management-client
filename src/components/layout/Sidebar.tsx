/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerators";
import { facultyRoutes } from "../../routes/facultyRoutes";
import { adminRoutes } from "../../routes/adminRoutes";
import { studentRoutes } from "../../routes/studentRoutes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser, TUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;

  let sidebarItems: any;

  switch (user!.role) {
    case userRole?.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminRoutes, userRole?.ADMIN);
      break;
    case userRole?.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyRoutes, userRole?.FACULTY);
      break;
    case userRole?.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentRoutes, userRole?.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
