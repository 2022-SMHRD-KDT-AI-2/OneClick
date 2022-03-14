import React from "react";
import { ButtonsClick, ButtonsReview, Footer } from "../../styles";

function ReviewFooter({ idx }) {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <ButtonsReview id={`${idx}addReview`}>리뷰작성</ButtonsReview>
      <ButtonsClick>주차장찾기</ButtonsClick>
      <ButtonsClick>차량길찾기</ButtonsClick>
      <ButtonsClick>도보길찾기</ButtonsClick>
    </Footer>
  );
}

export default ReviewFooter;
