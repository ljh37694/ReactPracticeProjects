import { useSelector } from "react-redux";
import CafeCardList from "../ui/CafeCardList";

function FavoriteCafePanel(props) {
  const favoriteCafeList = useSelector(state => state.favoriteCafeList.value);

  return (
    <div className="panel-container">
      <h4 className="title">즐겨찾기</h4>
      <CafeCardList cafeList={favoriteCafeList} />
    </div>
  );
}

export default FavoriteCafePanel;