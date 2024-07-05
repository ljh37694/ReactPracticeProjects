import { useEffect } from "react";

function LoginCheckPage(props) {
  useEffect(() => {
    fetch('http://localhost:5000/user/token')
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));
  });

  return (
    <div></div>
  );
}

export default LoginCheckPage;