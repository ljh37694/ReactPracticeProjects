import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchPanel from "../components/SearchPanel";
import NearbyCafePanel from "../components/NearbyCafePanel";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);
  const dispatch = useDispatch();
  const currentMenu = useSelector(state => state.currentMenu.value);
  const panelContentList = [<SearchPanel />, <NearbyCafePanel />];

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
