import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/states/isLoggedIn";
import { setUserData } from "../redux/states/userData";

function ProtectedRoute(props) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  
  useEffect(() => {
    axios.get('http://localhost:5000/login/success', { withCredentials: true })
      .then(response => {
        console.log(response.data);

        dispatch(setUserData(response.data.data));
        dispatch(setIsLoggedIn(true));
      })
      .catch(e => {
        console.log(e);

        axios.get('http://localhost:5000/refresh-token', {withCredentials: true})
        .then(response => {
          console.log(response.data);

          dispatch(setIsLoggedIn(true));
          dispatch(setUserData(response.data.data));
        })
        .catch(e => {
          console.log(e);
          dispatch(setIsLoggedIn(false));
        });

        dispatch(setIsLoggedIn(false));
      });
  }, []);

  return (isLoggedIn ? <Outlet /> : <Navigate to="/user/login" />);
}

export default ProtectedRoute;