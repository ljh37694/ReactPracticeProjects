import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function StarScore(props) {
  const [starCount, setStarCount] = useState(0);
  const [score, setScore] = useState(0);

  const width = 135;

  // mouse events
  const mouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
  
    const pos = e.clientX - rect.left + 1;

    setStarCount(pos / (width / 5));
  }

  const mouseClick = (e) => {
    setScore(starCount);
  }

  const mouseOut = (e) => {
    setStarCount(score);
  }

  useEffect(() => {
    setStarCount(score);
  }, [score]);

  return (
    <div className="star-score-container">
      <div className="star-score" onMouseMove={mouseMove} onClick={mouseClick} onMouseOut={mouseOut}>
        {[...new Array(5)].map((item, idx) => {
          return (
            <FontAwesomeIcon icon={faStar} size="xl" className={starCount > idx ? 'active-star' : ''} />
          );
        })}
      </div>
    </div>
  );
}

export default StarScore;