import React from "react";
import { reviewComment } from "../../../../utils/data";
import {
  ContentCenter,
  ContentsAll,
  ContentsTitle,
  Image,
  ImageContainer,
  List1,
  Menu,
} from "../../styles";
import { FlexColumnDiv, FlexRowDiv } from "../../../../styles";
import styled from "@emotion/styled";

function ReviewContents({ comment, menu }) {
  const review = reviewComment.slice();
  comment.forEach((item, index) => (review[index].value = item));
  review.sort((a, b) => b.value - a.value);
  return (
    <FlexRowDiv>
      <ContentsAll>
        <ContentsTitle>💙한줄평 리뷰💙</ContentsTitle>
        {review.map((item, key) => {
          return (
            <List1 key={key}>
              <span>{item.title}</span>
              <span
                style={{
                  position: "absolute",
                  right: "2rem",
                  marginTop: "8px",
                }}
              >
                {item.value}
              </span>
            </List1>
          );
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
