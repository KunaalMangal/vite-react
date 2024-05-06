import { lazy } from "react";

// Auth Pages
const Login = lazy(() => import("./auth/login/Login"));

const DashBoard = lazy(() => import("./main/dashboard/DashBoard"));

export { Login, DashBoard };
