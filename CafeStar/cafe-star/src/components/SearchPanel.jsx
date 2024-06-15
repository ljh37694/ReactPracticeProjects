import SearchInput from "../ui/SearchInput";
import CafeCardList from "../ui/CafeCardList";
import searchData from "../redux/states/searchData";
import { useSelector } from "react-redux";

function SearchPanel(props) {
  const searchData = useSelector(state => state.searchData.value);

  return (
    <div className="search-panel-container">
      <SearchInput />

      <div className="search-panel-content">
        <CafeCardList cafeList={searchData} />
      </div>
    </div>
  );
}

export default SearchPanel;