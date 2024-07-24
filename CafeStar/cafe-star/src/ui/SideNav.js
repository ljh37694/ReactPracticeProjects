import {
  faComment,
  faLocationDot,
  faMagnifyingGlass,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentMenu } from "../redux/states/currentMenu";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";

function SideNav(props) {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [activeMenu, setActiveMenu] = useState(0);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const icons = [faMagnifyingGlass, faLocationDot, faStar, faComment];
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  useEffect(() => {
    setShowUserPanel(false);
  }, [isLoggedIn]);

  return (
    <nav className="side-nav">
      <div className="brand-icon-container">
        <p>Cesr</p>
      </div>

      <div className="nav-menu-icon-container">
        {icons.map((icon, idx) => {
          return (
            <div
              className={`nav-menu-icon ${
                activeMenu === idx ? "nav-menu-active-icon" : ""
              }`}
              onClick={() => {
                setActiveMenu(idx);
                dispatch(setcurrentMenu(idx));
              }}
              key={idx}
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </div>
          );
        })}
      </div>

      <div className="nav-footer">
        <div>
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            onClick={() => {
              if (isLoggedIn) {
                setShowUserPanel(!showUserPanel);
              } else {
                navigate("/user/login");
              }
            }}
          />
        </div>

        {showUserPanel ? <UserPanel /> : null}
      </div>
    </nav>
  );
}

export default SideNav;
