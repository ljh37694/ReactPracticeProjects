import { useEffect } from "react";
import CafeCard from "../components/CafeCard";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteCafeList } from "../redux/states/favoriteCafeList";

function CafeCardList(props) {
  // func
  const dispatch = useDispatch();

  // props
  const { cafeList } = props;

  // states
  const userData = useSelector(state => state.userData.value);

  useEffect(() => {
    fetch('http://localhost:5000/favorite-cafes/get?userId=' + userData.id)
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
