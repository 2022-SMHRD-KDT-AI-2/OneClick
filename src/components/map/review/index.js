import React from "react";

import { comment, reviewTitle } from "../../../utils/data";
import ReviewHeader from "./reviewHeader";
import ReviewFooter from "./reviewFooter";
import { CloseButton, InfoWindowContainer } from "../styles";
import ReviewContents from "./reviewContents";

const reviewScore = [4.1, 2.5, 3.3, 5, 1];

function Review({ data }) {
  const { id } = data;

  return (
    <InfoWindowContainer>
      <CloseButton id={id}>❌</CloseButton>
      <ReviewHeader data={data} />
      <ReviewContents data={data} />
      <ReviewFooter idx={id} />
    </InfoWindowContainer>
  );
}

export default Review;
