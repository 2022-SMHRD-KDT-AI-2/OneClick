import React, { useCallback, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { getIconHTML } from "../../utils/getIconHTML";
import { Shop } from "./Shop";

function Map() {
  const mapRef = useRef(null);
  const { Tmapv2 } = window;

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

      const shop = new Shop(mapRef.current, {
        id: 1234,
        loc: loc,
        title: "시스살롱",
        category: "디저트 / 카페",
        addr: "광주 동구 백서로 219",
        tell: "070-1234-1234",
        sns: "http://",
        opTime: "12:00|20:00",
        breaktime: "15:00|17:00",
        hoilday: "월",
        parking: 5,
        img: "https://www.google.com/maps/uv?pb=!1s0x35718c9a0e94c579%3A0x581941d0d9dcea84!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOGkznBcODINZoaIsSO5nC20a_SEKy1OnbhvtRZ%3Dw468-h352-k-no!5z7Iuc7Iqk7IK066GxIC0gR29vZ2xlIOqygOyDiQ!15sCgIgAQ&imagekey=!1e10!2sAF1QipNNmcJWHenvH191IGK9OGoyS6XLMDVd3u6am_7B&hl=ko&sa=X&ved=2ahUKEwiA05_T9rz2AhVFFIgKHfKNBJAQoip6BAgqEAM#",
      });
      shop.setMarker();
      shop.setReview();
    });
  }, [Tmapv2]);

  useEffect(() => {
    initTMap();
    console.log(ReactDOMServer.renderToString(<modal />));
  }, [initTMap]);

  return <div id="TMap" />;
}

export default Map;
