import React from "react";
import styled from "@emotion/styled";
import { categoryColors, categoryColorsKorean } from "../../../utils/data";

const MarkerContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  width: 90px;
  //height: 35px;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  border: 4px solid #2b6bf3;
`;

const MarkerInfo = styled.div`
  font-size: 1rem;
  text-align: center;
`;

function Marker({ data }) {
  const { name, upperBizName, id } = data;
  return (
    <MarkerContainer
      id={`${id}marker`}
      style={{
        borderColor: `${
          upperBizName
            ? categoryColorsKorean[upperBizName]
            : categoryColors["button"]
        }`,
      }}
    >
      <MarkerInfo>
        <span>{name}</span>
      </MarkerInfo>
    </MarkerContainer>
  );
}

export default Marker;
