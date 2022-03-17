import React, { useEffect } from "react";

import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationData, shopData } from "../../atom/atom";
import { createMap, destroyMap } from "../../utils/functions";
import { FlexRowDiv } from "../../styles";
import { categoryColors } from "../../utils/data";

const MapContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;

const MapInnerModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  z-index: 1;
  right: 0px;
  top: 0px;
  width: 170px;
  height: 400px;
  justify-content: center;
  border-bottom-left-radius: 40px;

  > * {
    font-size: 1.2rem;
  }
`;

const ResetButton = styled.button`
  margin: 5px 0 5px 1.1rem;

  width: 80%;
  color: #fff;
  background-color: ${categoryColors.button};
  border: none;
  font-size: 15px;
  font-weight: 900;
  padding: 5px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  flex-grow: 1;

  &:hover {
    background-color: #e01e5a;
    border: none;
  }

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
const Palette = styled(FlexRowDiv)`
  flex-grow: 1;
  margin: 0.3rem 0 0.3rem 0;
  justify-content: center;

  > span {
    width: 60px;
    margin-top: 0.5rem;
    text-align: center;
    margin-right: 1rem;
  }
`;
const Color = styled.div`
  width: 50px;
  border-radius: 20px;
`;

const colors = {
  korean: "#E83A14",
  chinese: "#FDFFA9",
  Japanese: "#019267",
  western: "#533E85",
  asian: "#EEEDDE",
  cafe: "#CEAB93",
  bar: "#19282F",
  another: "#4D77FF",
};

const str = {
  korean: "한식",
  chinese: "중식",
  Japanese: "일식",
  western: "양식",
  asian: "아시안",
  cafe: "카페",
  bar: "바",
  another: "기타",
};

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
        {Object.keys(colors).map((item, index) => {
          return (
            <Palette>
              <span>{str[item]}</span>
              <Color style={{ backgroundColor: `${colors[item]}` }}></Color>
            </Palette>
          );
        })}
      </MapInnerModal>
    </MapContainer>
  );
}

export default Map;
