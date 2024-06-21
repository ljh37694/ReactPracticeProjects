import { useEffect } from "react";
import CafeCard from "../components/CafeCard";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteCafeList } from "../redux/states/favoriteCafeList";

function CafeCardList(props) {
  const dispatch = useDispatch();

  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const { cafeList } = props;
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  useEffect(() => {
    fetch('http://localhost:5000/favorite-cafes/get')
      .then((res) => res.json())
      .then((data) => dispatch(setFavoriteCafeList(data)))
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    return () => {
      fetch('http://localhost:5000/favorite-cafes/set', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: favoriteCafeList,
        }),
      })
    }
  }, [favoriteCafeList]);

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
