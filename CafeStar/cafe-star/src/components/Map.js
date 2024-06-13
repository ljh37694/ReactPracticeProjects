import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setKakaoMap } from "../redux/states/kakaoMap";

const { kakao } = window;

function Map(props) {
	const mapContainer = useRef();
	const dispatch = useDispatch();

  useEffect(() => {
		const container = document.getElementById('map');

		kakao.maps.load(() => {
			const options = {
				center: new kakao.maps.LatLng(33.450701, 126.570667),
				level: 3
			};

			dispatch(setKakaoMap(new kakao.maps.Map(container, options)));
		});

		console.log(kakao.maps);
  }, [mapContainer]);

  return (
    <div id="map" ref={mapContainer}></div>
  );
}

export default Map;
