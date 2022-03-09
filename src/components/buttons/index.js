import React from "react";
import styled from "@emotion/styled";
import Button from "./button";

const ButtonsContainer = styled.div`
  min-width: 900px;
  width: 80%;
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;


  const arr = ["한식", "중식", "양식", "일식", "분식", "카페", "아시안", "햄버거", "치킨", "피자", "+"];
  


function Buttons() {
  return (
    <ButtonsContainer>
      {arr.map((item, key) => {
        return <Button id= "btn_select" key={key} title={item}/>;
      })}
    </ButtonsContainer>
  );
}

export default Buttons;
