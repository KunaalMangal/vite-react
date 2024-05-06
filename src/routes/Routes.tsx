import { DashBoard, Login } from "../pages";

export const PublicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
];

export const PrivateRoutes = [
  {
    path: "/",
    element: <DashBoard />,
  },
];
