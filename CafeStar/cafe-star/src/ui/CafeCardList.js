import { useEffect, useState } from "react";
import CafeCard from "../components/CafeCard";
import { useSelector, useDispatch } from "react-redux";
import { setsearchData } from "../redux/states/searchData";

function CafeCardList(props) {
  const searchData = useSelector((state) => state.searchData.value);
  const kakaoMap = useSelector(state => state.kakaoMap.value);
  const places = new window.kakao.maps.services.Places();

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords);
      const curPos = new window.kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      places.categorySearch('CE7', (res) => {
        console.log(res);
        dispatch(setsearchData(res));
        kakaoMap.setCenter(curPos);
      }, { location: curPos });
    });
  }, []);

  useEffect(() => {
    searchData.forEach((data) => {
      const latlng = new window.kakao.maps.LatLng(data.y, data.x);
      
      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: latlng,
        clickable: true,
      });

      const infoCentent =
        `<div class="location-info">
          <p class="location-info-title">${ data.place_name }</p>
          <p class="location-info-address">${ data.address_name }</p>
        </div>`;

      const infoWindow = new window.kakao.maps.InfoWindow({
        position: latlng,
        content: infoCentent,
        removable: true,
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(kakaoMap, marker);
      });
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