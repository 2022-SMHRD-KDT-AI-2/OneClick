import React, { useEffect, useRef } from "react";
import { Shop } from "./Shop";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { shopData } from "../../atom/atom";

const MpaContainer = styled.div`
  width: 80%;
  height: 100%;
`;

function Map() {
  const mapRef = useRef(null);
  const shop = useRecoilValue(shopData);
  const { Tmapv2 } = window;

  let shops = [];

  const initTMap = (data) => {
    // 먼저 지도를 생성 후 중심좌표 설정 >> ui 깨짐을 방지하기 위함
    mapRef.current = new Tmapv2.Map("TMap", {
      // 지도의 폭
      width: "80%",
      // 지도의 높이
      height: "100%",
      // 지도의 범위
      zoom: 16,
      zIndexMarker: 5,
      zIndexInfoWindow: 10,
      scrollwheel: false,
    });
    navigator.geolocation.getCurrentPosition((position) => {
      let loc = new Tmapv2.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      mapRef.current.setCenter(loc);
    });
    new Tmapv2.InfoWindow();
    for (let item of shop.data) {
      const inst = new Shop(mapRef.current, item);
      inst.setMarker();
      inst.setReview();
      shops.push(inst);
    }
  };

  useEffect(() => {
    if (shop.data) {
      initTMap(shop.data);
    }
  }, [initTMap, shop.data]);

  return <MpaContainer id="TMap" />;
}

export default Map;
