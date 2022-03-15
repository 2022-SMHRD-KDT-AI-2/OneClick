import React, { useCallback, useEffect, useRef, useState } from "react";
import { Shop } from "./Shop";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { locationData, shopData } from "../../atom/atom";
import { renderToString } from "react-dom/server";
import AddReview from "./addReview";

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
    if (shop) {
      for (let item of shop) {
        const inst = new Shop(mapRef.current, item);
        inst.setMarker();
        //inst.setReview();
        //setShops([...shops, inst]);
      }
    }
  }, []);

  useEffect(() => {
    initTMap();
    const addreview = new Tmapv2.InfoWindow({
      position: new Tmapv2.LatLng(loc.lat, loc.long),
      background: false,
      border: "0px solid white",
      content: renderToString(<AddReview id={1} key={1} />),
      type: 2,
      align: 15,
      visible: true,
      map: mapRef.current,
    });
  }, [initTMap]);

  useEffect(() => {
    if (shop.length != []) renderShopInfo();
  }, [shop, renderShopInfo]);

  return <MpaContainer id="TMap" />;
}

export default Map;
