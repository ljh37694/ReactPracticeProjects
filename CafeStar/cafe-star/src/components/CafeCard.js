import { useSelector } from "react-redux";

function CafeCard(props) {
  const { data } = props;
  const kakaoMap = useSelector(state => state.kakaoMap.value);

  return (
    <div className="cafe-card" onClick={() => {
      kakaoMap.setCenter(new window.kakao.maps.LatLng(data.y, data.x));
    }}>
      <a className="cafe-card-title" href={ data.place_url }>{ data.place_name }</a>
      <p className="cafe-card-address">{ data.address_name }</p>
    </div>
  );
}

export default CafeCard;