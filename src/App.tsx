import { FC, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes/Routes";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AuthLayout } from "./layouts/AuthLayout";

const isLogin: boolean = false;

const PublicRouter = createBrowserRouter(
  createRoutesFromElements(
    PublicRoutes.map((item, index) => (
      <Route key={index} path={item.path} element={item.element} />
    ))
  )
);

const PrivateRouter = createBrowserRouter(
  createRoutesFromElements(
    PrivateRoutes.map((item, index) => (
      <Route key={index} path={item.path} element={item.element} />
    ))
  )
);

const App: FC = () =>
  !isLogin ? (
    <AuthLayout>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={PublicRouter} />
      </Suspense>
    </AuthLayout>
  ) : (
    <DashboardLayout>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={PrivateRouter} />
      </Suspense>
    </DashboardLayout>
  );

export default App;
