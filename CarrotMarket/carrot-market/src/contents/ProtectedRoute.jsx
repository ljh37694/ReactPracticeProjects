import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:1234/user-valid", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .catch((e) => {
                console.log(e);

                navigate("/");
            });
    });

    return <Outlet />;
}

export default ProtectedRoute;
