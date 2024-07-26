import SideNav from "../ui/SideNav";
import MainPanel from "../ui/MainPanel";
import Map from "../components/Map";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMyReviewList } from "../redux/states/myReviewList";

function MainPage(props) {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData.value);

  useEffect(() => {
    axios.get('http://localhost:5000/user/cafe/review/get?userId=' + userData.id)
    .then(res => {
      dispatch(setMyReviewList(res.data));
      console.log(res.data);
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <main id="main-page">
      <SideNav />
      <MainPanel />
      <Map />
    </main>
  );
}

export default MainPage;