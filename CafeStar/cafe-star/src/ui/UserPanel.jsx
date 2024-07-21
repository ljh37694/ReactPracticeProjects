import axios from "axios";
import { useSelector } from "react-redux";

function UserPanel(props) {
  const userData = useSelector(state => state.userData.value);

  return (
    <section className="user-info-container">
      <div className="user-info">
        <p>{userData.email}</p>
        <button
          onClick={() => {
            axios.get("http://localhost:5000/logout", {
                withCredentials: true,
            })
              .catch((e) => console.log(e));
          }}
        >
          로그아웃
        </button>
      </div>
      <div></div>
    </section>
  );
}

export default UserPanel;