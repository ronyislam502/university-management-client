import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { routeGenerators } from "../utils/routesGenerators";
import { adminRoutes } from "./adminRoutes";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
    children: routeGenerators(adminRoutes),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
