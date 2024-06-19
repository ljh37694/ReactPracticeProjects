import { useSelector } from "react-redux";
import CafeCardList from "../ui/CafeCardList";
import { useEffect } from "react";

function FavoriteCafePanel(props) {
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  useEffect(() => {
    fetch('http://localhost:5000/favorite-cafes/get')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="panel-container">
      <h4 className="title">즐겨찾기</h4>
      <CafeCardList cafeList={favoriteCafeList} />
    </div>
  );
}

export default FavoriteCafePanel;