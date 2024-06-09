import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);

  return (
    <div className={`main-panel ${ isClose === true ? "main-panel-close" : "" }`}>
      <button className="main-panel-close-button" onClick={() => setIsClose(!isClose)}>
        <FontAwesomeIcon icon={ isClose === true ? faChevronLeft : faChevronRight} />
      </button>
    </div>
  );
}

export default MainPanel;