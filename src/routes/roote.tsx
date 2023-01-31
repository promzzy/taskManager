import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../pages/DashboardLayout";
import HomePage from "../pages/HomePage";
import Members from "../pages/Members";
import Taskboard from "../pages/Taskboard";
import { paths } from "./paths";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
    path: "/",
    element: <HomePage />
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
    ],
  },
])