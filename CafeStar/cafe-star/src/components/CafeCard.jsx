import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFavoriteCafe, removeFavoriteCafe } from "../redux/states/favoriteCafeList";
import StarScore from "../ui/StarScore";
import { useNavigate } from "react-router-dom";

function CafeCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // props
  const { data, idx } = props;

  // states
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);
  const userData = useSelector(state => state.userData.value);
  const myReviewList = useSelector(state => state.myReviewList.value);

  const [isFavorite, setIsFavorite] = useState(false);
  const [score, setScore] = useState(0.0);
  const [showRatingButton, setShowRatingButton] = useState(true);

  useEffect(() => {
    const isEstimated = myReviewList.findIndex(review => review["user_id"] === userData.id && review.id === data.id);

    console.log(isEstimated);

    setShowRatingButton(isEstimated === -1);
  }, []);

  // onClick
  const onClickStar = (e) => {
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
        body: JSON.stringify({...data, user_id: userData.id}),
      });
    }
  };

  useEffect(() => {
    setIsFavorite(favoriteCafeList.findIndex(item => item.id === data.id) !== -1);
  }, [favoriteCafeList]);

  useEffect(() => {
    const latlng = new window.kakao.maps.LatLng(data.y, data.x);

    const marker = new window.kakao.maps.Marker({
      map: kakaoMap,
      position: latlng,
      clickable: true,
    });

    const infoCentent = `<div class="location-info">
        <p class="location-info-title">${data.place_name}</p>
        <p class="location-info-address">${data.address_name}</p>
      </div>`;

    const infoWindow = new window.kakao.maps.InfoWindow({
      position: latlng,
      content: infoCentent,
      removable: true,
    });

    const openInfoWindow = () => {
      infoWindow.open(kakaoMap, marker);
    }

    const cafeCardContentContainer = document.querySelectorAll('.cafe-card-content-container')[idx];

    window.kakao.maps.event.addListener(marker, "click", openInfoWindow);

    cafeCardContentContainer.addEventListener('click', openInfoWindow);

    return () => {
      marker.setVisible(false);
      cafeCardContentContainer.removeEventListener('click', openInfoWindow);
    }
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
            onClick={onClickStar}>
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
          <div className="rating-container">
            <StarScore score={score} setScore={setScore} size="small" />
            <p>{score.toFixed(1)}</p>
          </div>
          <div>
            <button className={`btn rating-btn ${showRatingButton ? "" : "hide-rating-button"}`} onClick={() => navigate('/cafe/review', {
              state: {
                data,
              }
            })}>평가하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CafeCard;
