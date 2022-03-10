import React, {useCallback, useEffect, useRef} from "react";
import ReactDOMServer from "react-dom/server";
import {getIconHTML} from "../../utils/getIconHTML";
import {Shop} from "./Shop";

function Map() {
  const mapRef = useRef(null);
  const {Tmapv2} = window;

  const html = getIconHTML("🍚", "가게이름", "기타정보");

  const initTMap = useCallback(() => {
    // 먼저 지도를 생성 후 중심좌표 설정 >> ui 깨짐을 방지하기 위함
    mapRef.current = new Tmapv2.Map("TMap", {
      // 지도의 폭
      width: "80%",
      // 지도의 높이
      height: "100%",
      // 지도의 범위
      zoom: 14,
      zIndexMarker: 5,
      zIndexInfoWindow: 10,
    });

    navigator.geolocation.getCurrentPosition((position) => {
      let loc = new Tmapv2.LatLng(
          position.coords.latitude,
          position.coords.longitude
      );
      mapRef.current.setCenter(loc);


      const shop = new Shop(mapRef.current, {loc: loc});
      shop.setMarker();
      shop.setReviewModal();
    });
  }, [Tmapv2]);

  useEffect(() => {
    initTMap();
    console.log(ReactDOMServer.renderToString(<modal/>));
  }, [initTMap]);

  return <div id="TMap"/>;
}

export default Map;
