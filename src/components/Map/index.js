import React, { useEffect } from "react";

import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationData, shopData } from "../../atom/atom";
import { categoryColors } from "../../utils/data";
import { createMap, destroyMap } from "../../utils/functions";

const MapContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;

const MapInnerModal = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  z-index: 1;
  right: 0px;
  top: 0px;
  width: 100px;
  height: 20%;
  justify-content: center;
`;

const ResetButton = styled.button`
  margin-bottom: 5px;
  margin-top: 5px;
  width: 80%;
  color: #fff;
  background-color: ${categoryColors.button};
  border: none;
  font-size: 15px;
  font-weight: 900;
  height: 44px;
  padding: 5px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #e01e5a;
    border: none;
  }

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

function Map() {
  const loc = useRecoilValue(locationData);
  const setShopData = useSetRecoilState(shopData);

  useEffect(() => {
    createMap(loc.lat, loc.long);
  }, []);

  const onClickReset = () => {
    destroyMap();
    createMap(loc.lat, loc.long);
    setShopData([]);
  };

  return (
    <MapContainer id="TMap">
      <MapInnerModal>
        <ResetButton onClick={onClickReset}>초기화</ResetButton>
      </MapInnerModal>
    </MapContainer>
  );
}

export default Map;
