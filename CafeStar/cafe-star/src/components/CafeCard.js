import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFavoriteCafe, removeFavoriteCafe } from "../redux/states/favoriteCafeList";
import StarScore from "../ui/StarScore";

function CafeCard(props) {
  const dispatch = useDispatch();

  const { data } = props;
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const star = 5.0;
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  const [isFavorite, setIsFavorite] = useState(false);

  useState(() => {
    setIsFavorite(favoriteCafeList.findIndex(item => item.id === data.id) !== -1);
  }, [favoriteCafeList]);

  return (
    <div className="cafe-card" key={data.id}>
      <section className="cafe-card-title-container">
        <a className="cafe-card-title" href={data.place_url}>
          {data.place_name}
        </a>
        <div>
          <label
            className={`favorite-button ${isFavorite ? 'active-favorite-button' : '' }`}
            onClick={(e) => {
              setIsFavorite(!isFavorite);

              if (isFavorite === true) {
                dispatch(removeFavoriteCafe(data));

                fetch("http://localhost:5000/favorite-cafes/delete?id=" + data.id, {
                  method: "DELETE",
                });
              } else {
                dispatch(pushFavoriteCafe(data));

                fetch("http://localhost:5000/favorite-cafes/push", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({...data}),
                });
              }
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </label>
        </div>
      </section>

      <section className="cafe-card-content-container"
        onClick={(e) => {
          kakaoMap.setCenter(new window.kakao.maps.LatLng(data.y, data.x));
        }}
      >
        <p className="cafe-card-address">{data.address_name}</p>

        <div className="cafe-card-rating-container">
          <div className="cafe-card-star-container">
            {[...new Array(star)].map((item, idx) => {
              return <FontAwesomeIcon icon={faStar} key={idx} />;
            })}

            <StarScore />
          </div>
          <p>{star.toFixed(1)}</p>
        </div>
      </section>
    </div>
  );
}

export default CafeCard;
