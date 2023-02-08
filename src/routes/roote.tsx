import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../pages/DashboardLayout";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Members from "../pages/Members";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Taskboard from "../pages/Taskboard";
import { paths } from "./paths";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
    path: "/",
    element: <Login />
  },
    {
    path: "/register",
    element: <Register />
  },
    {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
    {
    path: "/",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: paths.dashboard,
        element: <Dashboard />
      },
      {
        path: paths.dashboardCreateTask,
        element: <Dashboard />
      },
      {
        path: paths.taskBoard,
        element: <Taskboard />
      },
      {
        path: paths.createTask,
        element: <Taskboard />
      },
      {
        path: paths.editTask,
        element: <Taskboard />
      },
      {
        path: paths.taskAddMember,
        element: <Taskboard />
      },
      {
        path: paths.taskEditMember,
        element: <Taskboard />
      },
      {
        path: paths.memberboard,
        element: <Members />
      },
      {
        path: paths.addMember,
        element: <Members />
      },
      {
        path: paths.editMember,
        element: <Members />
      },
      {
        path: paths.profile,
        element: <Profile />
      },
    ],
  },
])