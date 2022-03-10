import React from "react";
import styled from "@emotion/styled";

const MarkerContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 50px;
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

function Marker({ title, info }) {
  return (
    <MarkerContainer>
      <MarkerInfo>
        <span>{title}</span>
        <span>{info}</span>
      </MarkerInfo>
    </MarkerContainer>
  );
}

export default Marker;
