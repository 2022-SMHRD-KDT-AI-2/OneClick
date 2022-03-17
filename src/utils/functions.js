import React from "react";
import { Label } from "../components/map/styles";

const { Tmapv2 } = window;

export function emptyCheck(str, index) {
  return str ? (
    <Label key={index}>{str}</Label>
  ) : (
    <Label key={index}>{" - "}</Label>
  );
}

export function createMap(lat, long) {
  return new Tmapv2.Map("TMap", {
    // 지도의 폭
    width: "80%",
    // 지도의 높이
    height: "100%",
    // 지도의 범위
    zoom: 16,
    zIndexMarker: 5,
    zIndexInfoWindow: 10,
  }).setCenter(new Tmapv2.LatLng(lat, long));
}

export function destroyMap() {
  document.querySelector("#TMap > div:nth-child(2)").remove();
}
