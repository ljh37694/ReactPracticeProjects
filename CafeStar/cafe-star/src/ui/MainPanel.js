import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CafeCard from "../components/CafeCard";
import { useSelector, useDispatch } from "react-redux";
import { setsearchData } from "../redux/states/searchData";

function MainPanel(props) {
  let [isClose, setIsClose] = useState(false);
  let [activeX, setActiveX] = useState(false);
  const searchData = useSelector((state) => state.searchData.value);

  const dispatch = useDispatch();

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

      <div className="search-input-container">
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();

            const text = document.getElementById("search-input").value;

            fetch("http://localhost:5000/search?query=" + text)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                dispatch(setsearchData(data));

                console.log(searchData);
              });
          }}
        >
          <input
            id="search-input"
            onInput={(e) => {
              if (e.target.value === "") {
                setActiveX(false);
              } else {
                setActiveX(true);
              }
            }}
          />
        </form>
        <div className="x-button">
          {activeX === true ? (
            <FontAwesomeIcon
              icon={faX}
              onClick={() => {
                document.getElementById("search-input").value = "";
                setActiveX(false);
              }}
            />
          ) : null}
        </div>
      </div>

      <div className="panel-content-container">
        <div className="cafe-card-container">
          {
            searchData.map((data, idx) => {
              console.log(data, idx);

              return (
                <CafeCard data={data} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
