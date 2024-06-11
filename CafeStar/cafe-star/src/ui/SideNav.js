import { faHouse, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SideNav(props) {
  let [activeMenu, setActiveMenu] = useState(0);
  const icons = [faHouse, faStar];

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
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
