import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFavoriteCafe } from "../redux/states/favoriteCafeList";

function CafeCard(props) {
  const { data } = props;
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const star = 5.0;
  const [isFavorite, setIsFavorite] = useState(data.isFavorite);
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  const dispatch = useDispatch();

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

              if (isFavorite === false) {
                const dataIndex = favoriteCafeList.findIndex(item => item.id === data.id);

                if (dataIndex !== -1) {
                  const curData = { ...favoriteCafeList[dataIndex] };

                  curData.isFavorite = true;

                  dispatch(pushFavoriteCafe(curData));
                } else {
                  favoriteCafeList.splice(dataIndex, 1);
                }
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
