import React from "react";
import { ButtonContainer } from "../styles";

function Button({ title, toggle }) {
  return (
    <ButtonContainer onClick={() => toggle(true)}>{title}</ButtonContainer>
  );
}

export default Button;
