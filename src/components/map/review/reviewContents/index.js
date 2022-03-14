import React from "react";
import { comment, reviewTitle } from "../../../../utils/data";
import {
  ColumnDiv,
  ContentCenter,
  Image,
  ImageContainer,
  Label,
  List_1,
  List_2,
  List_3,
  List_4,
  RowDiv,
  StarRating,
} from "../../styles";
import { Contents } from "../../../../pages/main/styles";
import { FlexRowDiv } from "../../../../styles";
import styled from "@emotion/styled";

const reviewScore = [4.1, 2.5, 3.3, 5, 1];

const StarRate = styled.div`
  width: 120px;
  margin: 0.5rem 0 0.5rem 1rem;
`;

function ReviewContents() {
  function star(number) {
    const num = Math.round(number);
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += "⭐";
    }
    return result;
  }

  return (
    <RowDiv>
      <ContentCenter>
        <Label>💙한줄평 리뷰💙</Label>
        {comment.map((item, key) => {
          return <List_1 key={key}>{item}</List_1>;
        })}
      </ContentCenter>
      <ColumnDiv>
        <Label>💙별점 만족도💙</Label>
        {reviewTitle.map((item, index) => {
          return (
            <FlexRowDiv>
              <StarRate>{item}</StarRate>
              <StarRate>{star(reviewScore[index])}</StarRate>
              <StarRate>{reviewScore[index]}</StarRate>
            </FlexRowDiv>
          );
        })}
        <ImageContainer>
          <Image />
          <Image />
        </ImageContainer>
      </ColumnDiv>
    </RowDiv>
  );
}

export default ReviewContents;
