import SearchInput from "../ui/SearchInput";
import CafeCardList from "../ui/CafeCardList";
import { useSelector } from "react-redux";

function SearchPanel(props) {
  const cafeList = useSelector(state => state.cafeList.value);

  return (
    <div className="panel-container">
      <SearchInput />

      <CafeCardList cafeList={cafeList} />
    </div>
  );
}

export default SearchPanel;