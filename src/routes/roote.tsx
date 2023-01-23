import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../pages/DashboardLayout";
import HomePage from "../pages/HomePage";
import Taskboard from "../pages/Taskboard";
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
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "/task-board",
        element: <Taskboard />
      },
    ],
  },
])