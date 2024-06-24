import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFavoriteCafe, removeFavoriteCafe, setFavoriteCafeList } from "../redux/states/favoriteCafeList";

function CafeCard(props) {
  const dispatch = useDispatch();

  const { data } = props;
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const star = 5.0;
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  const [isFavorite, setIsFavorite] = useState(favoriteCafeList.findIndex(item => item.id === data.id) !== -1);

  useEffect(() => {
  }, []);

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
              } else {
                dispatch(pushFavoriteCafe(data));
              }          
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
            {[...new Array(star)].map((item, idx) => {
              return <FontAwesomeIcon icon={faStar} key={idx} />;
            })}
          </div>
          <p>{star.toFixed(1)}</p>
        </div>
      </section>
    </div>
  );
}

export default CafeCard;
