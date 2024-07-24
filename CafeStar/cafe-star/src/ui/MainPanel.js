import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchPanel from "../components/SearchPanel";
import NearbyCafePanel from "../components/NearbyCafePanel";
import FavoriteCafePanel from "../components/FavoriteCafePanel";
import ReviewPanel from "../components/ReviewPanel";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);
  const currentMenu = useSelector(state => state.currentMenu.value);
  const panelContentList = [<SearchPanel />, <NearbyCafePanel />, <FavoriteCafePanel />, <ReviewPanel />];

  return (
    <div className={`main-panel ${isClose === true ? "main-panel-close" : ""}`}>
      {/* 패널 닫기 버튼 */}
      <button
        className="main-panel-close-button"
        onClick={() => setIsClose(!isClose)}
      >
        <FontAwesomeIcon
          icon={isClose === true ? faChevronLeft : faChevronRight}
        />
      </button>
      
      <section className="main-panel-content">
        { panelContentList[currentMenu] }
      </section>
    </div>
  );
}

export default MainPanel;
