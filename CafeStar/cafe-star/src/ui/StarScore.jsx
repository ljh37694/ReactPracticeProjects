import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function StarScore(props) {
  return (
    <div className="star-score-container">
      { [...new Array(5)].map(() => {
        return (
          <FontAwesomeIcon icon={faStar} />
        );
      }) }
    </div>
  );
}

export default StarScore;