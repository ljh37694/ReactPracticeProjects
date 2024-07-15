import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/login/success', {
      method: "GET",
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          setIsLoggedIn(true);

          return response.json();
        } else {
          fetch('http://localhost:5000/refresh-token', {
            method: "GET",
            credentials: 'include',
          })
            .then((response) => response.json())
            .then(data => {
              console.log(data);
              setIsLoggedIn(true);
              setUserData(data);
            })
            .catch(e => console.log(e));
          
          setIsLoggedIn(false);
          
          return Promise.reject(new Error(`HTTP error! status: ${response.status}`));
        }
      })
      .then(data => {
        console.log("hi", data);

        if (isLoggedIn) {
          setUserData(data);
          console.log(data);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;