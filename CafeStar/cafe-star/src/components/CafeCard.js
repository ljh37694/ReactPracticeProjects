import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function CafeCard(props) {
  const { data } = props;
  const kakaoMap = useSelector(state => state.kakaoMap.value);
  const star = 5.0;

  return (
    <div className="cafe-card" onClick={() => {
      kakaoMap.setCenter(new window.kakao.maps.LatLng(data.y, data.x));
    }}>
      <a className="cafe-card-title" href={ data.place_url }>{ data.place_name }</a>
      <p className="cafe-card-address">{ data.address_name }</p>

      <div className="cafe-card-rating-container">
        <div className="cafe-card-star-container">
          {
            [...new Array(star)].map(() => {
              return (
                <FontAwesomeIcon icon={faStar} />
              );
            })
          }
        </div>
        <p>{star.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default CafeCard;