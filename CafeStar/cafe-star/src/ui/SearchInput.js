import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCafeList } from "../redux/states/cafeList";
import { useDispatch } from "react-redux";
import { useState } from "react";

function SearchInput(props) {
  let [activeX, setActiveX] = useState(false);

  const dispatch = useDispatch();

  return (
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

              data.forEach((data) => {
                data.isFavorite = false;
              });
              
              dispatch(setCafeList(data));
            })
            .catch(e => console.log(e))
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
  );
}

export default SearchInput;