import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  border-radius: 0.5rem;
  height: 40px;
  width: 100px;
  text-align: center;
  margin-left: 5px;
  background-color: #2b6bf3;
  font-size: 20px;
  color : white;
  font-family: ONE-Mobile-POP;
`;

function Button({ title }) {
  return <ButtonContainer onClick={()=>{
   
  }}>{title}</ButtonContainer>;
}// 명칭 검색 사용해서 onclick 했을때 title이 검색되도록 만들기 
//마커부터 수정해야할듯

export default Button;