import React, { useRef } from "react";
import { Button } from "../styles";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationData, shopData } from "../../../atom/atom";
import { categoryColors, categoryColorsKorean, URL } from "../../../utils/data";
import { Shop } from "../../map/Shop";
import { destroyMap } from "../../../utils/functions";
import styled from "@emotion/styled";

const { Map, LatLng } = window.Tmapv2;

const Search = styled(Button)`
  color: black;
  background-color: white;
`;

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
          zoom: 18,
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
  return (
    <Search
      onClick={onClickSearchButton}
      style={{ border: `3px solid ${categoryColorsKorean[category]}` }}
    >
      {keyword}
    </Search>
  );
}

export default SearchButton;
