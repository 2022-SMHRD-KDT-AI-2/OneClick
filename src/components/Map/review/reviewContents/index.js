import React from "react";
import { reviewComment } from "../../../../utils/data";
import {
  ContentCenter,
  ContentsAll,
  ContentsTitle,
  Image,
  ImageContainer,
  Label,
  List1,
  Menu,
} from "../../styles";
import { FlexColumnDiv, FlexRowDiv } from "../../../../styles";

function ReviewContents({ comment, menu }) {
  const review = reviewComment.slice();
  comment.forEach((item, index) => (review[index].value = item));
  review.sort((a, b) => b.value - a.value);
  return (
    <FlexRowDiv>
      <ContentsAll>
        <ContentsTitle>💙한줄평 리뷰💙</ContentsTitle>
        {review.map((item, key) => {
          return <List1 key={key}>{item.title + `  ${item.value}`}</List1>;
        })}
      </ContentsAll>
      <ContentCenter>
        <Menu>💙메뉴 소개💙</Menu>
        <ImageContainer>
          {menu.map((item, index) => {
            return (
              <FlexColumnDiv>
                <Image src={`http://localhost:7501${item.img_src}`} />
                <span>{item.title}</span>
                <span>{item.price}</span>
              </FlexColumnDiv>
            );
          })}
        </ImageContainer>
      </ContentCenter>
    </FlexRowDiv>
  );
}

export default ReviewContents;
