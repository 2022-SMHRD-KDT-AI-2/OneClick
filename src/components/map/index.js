import React, { useCallback, useEffect, useRef, useState } from "react";
import { Shop } from "./Shop";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { locationData, shopData } from "../../atom/atom";

const MpaContainer = styled.div`
  width: calc(80% + 1px);
  height: 100%;
`;

function Map() {
  const mapRef = useRef(null);
  const [shops, setShops] = useState([]);
  const shop = useRecoilValue(shopData);
  const loc = useRecoilValue(locationData);
  const { Tmapv2 } = window;

  const initTMap = useCallback(() => {
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
    mapRef.current.setCenter(new Tmapv2.LatLng(loc.lat, loc.long));
  }, []);

  const renderShopInfo = useCallback(() => {
    for (let item of shop.data) {
      const inst = new Shop(mapRef.current, item);
      inst.setMarker();
      inst.setReview();
      setShops([...shops, inst]);
    }
  }, []);

  useEffect(() => {
    initTMap();
  }, [initTMap]);

  useEffect(() => {
    if (shop.length > 0) {
      renderShopInfo();
    }
  }, [shop, renderShopInfo]);

  return <MpaContainer id="TMap" />;
}

export default Map;
