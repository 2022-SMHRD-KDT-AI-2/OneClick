import React from "react";

import ReviewHeader from "./reviewHeader";
import ReviewFooter from "./reviewFooter";
import { CloseButton, InfoWindowContainer } from "../styles";
import ReviewContents from "./reviewContents";

function Review({ data, review, reviewImage, menu }) {
  const { id } = data;
  let comment = new Array(10).fill(0);
  let score = new Array(5).fill(0);
  if (review) {
    review.map((item) => {
      const { tasty, price, cleanliness, acessibility, mood } = item;
      item.comment.split(",").forEach((item) => (comment[item] += 1));
      [tasty, price, cleanliness, acessibility, mood].forEach(
        (item, index) => (score[index] += item)
      );
    });
    score.forEach((item, index) => (score[index] /= review.length));
  }

  return (
    <InfoWindowContainer>
      <CloseButton id={`${id}reviewCloseButton`}>❌</CloseButton>
      <ReviewHeader data={data} score={score} reviewImage={reviewImage} />
      <ReviewContents data={data} comment={comment} menu={menu} />
      <ReviewFooter idx={id} />
    </InfoWindowContainer>
  );
}

export default Review;
