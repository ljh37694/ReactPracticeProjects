import { Outlet } from "react-router-dom";

function LoginPage(props) {
  return (
    <main id="login-page">
      <Outlet />
    </main>
  );
}

export default LoginPage;