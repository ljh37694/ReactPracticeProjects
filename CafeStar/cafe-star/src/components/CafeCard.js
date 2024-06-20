import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteCafeList ,pushFavoriteCafe, removeFavoriteCafe } from "../redux/states/favoriteCafeList";

function CafeCard(props) {
  const dispatch = useDispatch();

  const { data, favor } = props;
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const star = 5.0;

  const [isFavorite, setIsFavorite] = useState(favor);

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
              if (isFavorite === true) {
                dispatch(removeFavoriteCafe(data));
              } else {
                dispatch(pushFavoriteCafe(data));
              }

              fetch('http://localhost:5000/favorite-cafes/get')
              .then((res) => res.json())
              .then((data) => dispatch(setFavoriteCafeList(data)))
              .catch(e => console.log(e));

              setIsFavorite(!isFavorite);
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </label>
        </div>
      </section>

      <section
        onClick={(e) => {
          kakaoMap.setCenter(new window.kakao.maps.LatLng(data.y, data.x));
        }}
      >
        <p className="cafe-card-address">{data.address_name}</p>

        <div className="cafe-card-rating-container">
          <div className="cafe-card-star-container">
            {[...new Array(star)].map(() => {
              return <FontAwesomeIcon icon={faStar} />;
            })}
          </div>
          <p>{star.toFixed(1)}</p>
        </div>
      </section>
    </div>
  );
}

export default CafeCard;
