import { useEffect } from "react";
import CafeCard from "../components/CafeCard";
import { useSelector } from "react-redux";

function CafeCardList(props) {
  const searchData = useSelector((state) => state.searchData.value);
  const kakaoMap = useSelector(state => state.kakaoMap.value);

  useEffect(() => {
    searchData.forEach((data) => {
      const latlng = new window.kakao.maps.LatLng(data.y, data.x);
      
      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: latlng,
      });

      const infoCentent =
        `<div class="location-info">
          <p class="location-info-title">${ data.place_name }</p>
          <p class="location-info-address">${ data.address_name }</p>
        </div>`;

      const infoWindow = new window.kakao.maps.InfoWindow({
        position: latlng,
        content: infoCentent,
      });

      infoWindow.open(kakaoMap, marker);
    });
  }, [searchData]);

  return (
    <div className="cafe-card-container">
      {
        searchData.map((data) => {
          return (
            <CafeCard data={data} key={data.id} />
          );
        })
      }
    </div>
  );
}

export default CafeCardList;