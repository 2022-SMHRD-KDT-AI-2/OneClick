import React, { useRef } from "react";
import { Button } from "../styles";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationData, shopData } from "../../../atom/atom";
import { URL } from "../../../utils/data";
import { Shop } from "../../map/Shop";
import { destroyMap } from "../../../utils/functions";

const { Map, LatLng } = window.Tmapv2;

function SearchButton({ keyword, category }) {
  const mapRef = useRef(null);
  const setShop = useSetRecoilState(shopData);
  const loc = useRecoilValue(locationData);
  const onClickSearchButton = () => {
    axios
      .post(URL + "/shops/search", {
        lat: loc.lat,
        long: loc.long,
        keyword: keyword,
        category: category,
      })
      .then((res) => {
        setShop(res.data.shopData);
        destroyMap();
        mapRef.current = new Map("TMap", {
          // 지도의 폭
          width: "80%",
          // 지도의 높이
          height: "100%",
          // 지도의 범위
          zoom: 16,
          zIndexMarker: 5,
          zIndexInfoWindow: 10,
        });
        mapRef.current.setCenter(new LatLng(loc.lat, loc.long));
        res.data.shopData.map((item) => {
          const shop = new Shop(mapRef.current, item);
          shop.setMarker();
        });
      });
  };
  return <Button onClick={onClickSearchButton}>{keyword}</Button>;
}

export default SearchButton;
