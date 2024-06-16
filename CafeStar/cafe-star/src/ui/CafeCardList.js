import { useEffect } from "react";
import CafeCard from "../components/CafeCard";
import { useSelector } from "react-redux";

function CafeCardList(props) {
  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const { cafeList } = props;

  useEffect(() => {
    cafeList.forEach((data) => {
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

      window.kakao.maps.event.addListener(marker, "click", () => {
        infoWindow.open(kakaoMap, marker);
      });
    });
  }, [cafeList]);

  return (
    <div className="cafe-card-list-container">
      <div className="cafe-card-container">
        {cafeList.map((data) => {
          return <CafeCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default CafeCardList;
