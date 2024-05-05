import { FC } from "react";
import { Login } from "./pages/auth/login/Login";
import AuthLayout from "./layouts/AuthLayout";

const App: FC = () => (
    <AuthLayout>
      <Login />
    </AuthLayout>
);

export default App;
