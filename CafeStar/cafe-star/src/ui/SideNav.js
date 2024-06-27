import {
  faLocationDot,
  faMagnifyingGlass,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setcurrentMenu } from "../redux/states/currentMenu";
import { Link } from "react-router-dom";

function SideNav(props) {
  let [activeMenu, setActiveMenu] = useState(0);
  const icons = [faMagnifyingGlass, faLocationDot, faStar];
  const dispatch = useDispatch();

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
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
