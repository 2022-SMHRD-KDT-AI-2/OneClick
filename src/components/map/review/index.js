import React from "react";

import ReviewHeader from "./reviewHeader";
import ReviewFooter from "./reviewFooter";
import { CloseButton, InfoWindowContainer } from "../styles";
import ReviewContents from "./reviewContents";

function Review({ data }) {
  const { id } = data;
  return (
    <InfoWindowContainer>
      <CloseButton id={`${id}reviewCloseButton`}>❌</CloseButton>
      <ReviewHeader data={data} />
      <ReviewContents data={data} />
      <ReviewFooter idx={id} />
    </InfoWindowContainer>
  );
}

export default Review;
