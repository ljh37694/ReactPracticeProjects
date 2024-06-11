import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);

  return (
    <div className={`main-panel ${ isClose === true ? "main-panel-close" : "" }`}>
      <button className="main-panel-close-button" onClick={() => setIsClose(!isClose)}>
        <FontAwesomeIcon icon={ isClose === true ? faChevronLeft : faChevronRight} />
      </button>

      <div className="search-input-container">
        <div className="search-icon">
          <FontAwesomeIcon icon={ faMagnifyingGlass } />
        </div>
        <form className="search-form" onSubmit={(e) => {
          e.preventDefault();

          const text = document.getElementById('search-input').value;

          console.log(text);

          fetch('http://localhost:5000/search?query=' + text)
          .then((res) => res.json())
          .then((data) => console.log(data));
        }}>
          <input id="search-input" />
        </form>
        <div className="x-button">
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
    </div>
  );
}

export default MainPanel;