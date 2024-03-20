import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
    const isLogin = localStorage.getItem("token");

    return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;