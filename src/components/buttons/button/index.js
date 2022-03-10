import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  border-radius: 0.5rem;
  height: 40px;
  width: 100px;
  text-align: center;
  margin-left: 5px;
  background-color: #2b6bf3;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

function Button({ title }) {
  return <ButtonContainer>{title}</ButtonContainer>;
}

export default Button;
