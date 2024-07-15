import { useEffect } from "react";

function ProtectedRoute(props) {
  useEffect(() => {
    fetch('http://localhost:5000/login/success', {
      method: "GET",
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log("hi", data);
      })
      .catch(e => {
        console.log('hihi');

        fetch('http://localhost:5000/refresh-token', {
          method: "GET",
          credentials: 'include',
        })
          .then((response) => response.json())
          .then(data => console(data))
          .catch(e => console.log(e));
      })
  }, []);

  return (
    <div>
      hi
    </div>
  );
}

export default ProtectedRoute;