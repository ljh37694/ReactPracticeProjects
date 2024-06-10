import SideNav from "../ui/SideNav";
import MainPanel from "../ui/MainPanel";
import Map from "../components/Map";

function MainPage(props) {
  return (
    <main id="main-page">
      <SideNav />
      <MainPanel />
      <Map />
    </main>
  );
}

export default MainPage;