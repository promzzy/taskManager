import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pagges/Dashboard";
import DashboardLayout from "../pagges/DashboardLayout";
import HomePage from "../pagges/HomePage";
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
      }
    ],
  },
])