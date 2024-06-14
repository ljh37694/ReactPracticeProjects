import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Components
import SearchInput from "./SearchInput";
import CafeCardList from "./CafeCardList";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);

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

      <SearchInput />

      <div className="panel-content-container">
        <CafeCardList />
      </div>
    </div>
  );
}

export default MainPanel;
