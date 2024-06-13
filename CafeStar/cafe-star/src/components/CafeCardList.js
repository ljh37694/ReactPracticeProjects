import { useEffect } from "react";
import CafeCard from "./CafeCard";
import { useSelector } from "react-redux";

function CafeCardList(props) {
  const searchData = useSelector((state) => state.searchData.value);
  const kakaoMap = useSelector(state => state.kakaoMap.value);

  useEffect(() => {
    searchData.forEach((data) => {
      new window.kakao.maps.Marker({
        map: kakaoMap,
        position: new window.kakao.maps.LatLng(data.y, data.x),
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