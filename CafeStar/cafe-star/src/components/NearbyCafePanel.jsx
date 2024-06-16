import { useDispatch, useSelector } from "react-redux";
import CafeCardList from "../ui/CafeCardList";
import { setCafeList } from "../redux/states/cafeList";
import { useEffect } from "react";

function NearbyCafePanel (prosp) {
  const dispatch = useDispatch();
  const cafeList = useSelector(state => state.cafeList.value);

  const places = new window.kakao.maps.services.Places();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords);
      const curPos = new window.kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      places.categorySearch('CE7', (res) => {
        res.forEach((data) => {
          data.isFovorite = false;
        });

        console.log(res);

        dispatch(setCafeList(res));
      }, { location: curPos });
    });
  }, []);

  return (
    <div className="panel-container">
      <h4 className="title">내 근처 카페</h4>

      <CafeCardList cafeList={cafeList} />
    </div>
  );
}

export default NearbyCafePanel;