import { useEffect } from "react";
import CafeCard from "../components/CafeCard";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteCafeList } from "../redux/states/favoriteCafeList";

function CafeCardList(props) {
  const dispatch = useDispatch();

  const kakaoMap = useSelector((state) => state.kakaoMap.value);
  const { cafeList } = props;
  
  useEffect(() => {
    fetch('http://localhost:5000/favorite-cafes/get')
      .then((res) => res.json())
      .then((data) => dispatch(setFavoriteCafeList(data)))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="cafe-card-list-container">
      <div className="cafe-card-container">
        {cafeList.map((data, idx) => {
          return <CafeCard data={data} idx={idx} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default CafeCardList;
