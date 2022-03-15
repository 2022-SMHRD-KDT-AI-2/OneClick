import React from "react";
import styled from "@emotion/styled";

const MarkerContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  width: 90px;
  height: 35px;
  padding: 0 10px;
  align-items: center;
  border: 2px solid #2b6bf3;
`;

const MarkerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  height: 100%;
  font-size: 16px;
`;

function Marker({ data }) {
  const { name, upperBizName } = data;
  return (
    <MarkerContainer>
      <MarkerInfo>
        <span>{name}</span>
        <span>{upperBizName}</span>
      </MarkerInfo>
    </MarkerContainer>
  );
}

export default Marker;
