import { useEffect } from "react";

const { kakao } = window;

function Map(props) {
  useEffect(() => {
		const container = document.getElementById('map');
    
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		const map = new kakao.maps.Map(container, options);

		// 아래와 같이 옵션을 입력하지 않아도 된다
		const zoomControl = new kakao.maps.ZoomControl();

		// 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다.
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		console.log(kakao.maps);
  }, []);

  return (
    <div id="map"></div>
  );
}

export default Map;
