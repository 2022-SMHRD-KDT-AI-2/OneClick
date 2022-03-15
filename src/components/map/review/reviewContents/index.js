import React from "react";
import { comment } from "../../../../utils/data";
import {
  ContentCenter,
  ContentsAll,
  ContentsTitle,
  Image,
  ImageContainer,
  List1,
  Menu,
} from "../../styles";
import { FlexRowDiv } from "../../../../styles";

function ReviewContents() {
  return (
    <FlexRowDiv>
      <ContentsAll>
        <ContentsTitle>💙한줄평 리뷰💙</ContentsTitle>
        {comment.map((item, key) => {
          return <List1 key={key}>{item}</List1>;
        })}
      </ContentsAll>
      <ContentCenter>
        <Menu>💙메뉴 소개💙</Menu>
        <ImageContainer>
          <Image />
          <div>
            아메리카노
            <div>4500원</div>
          </div>
          <Image />
          <div>
            카페라떼<p>5000원</p>
          </div>
          <Image />
          <div>
            바닐라라떼<p>5500원</p>
          </div>
          <Image />
          <div>
            딸기스무디<p>7000원</p>
          </div>
          <Image />
          <div>
            다쿠아즈(세트 주문예약)<p>4500원</p>
          </div>
          <Image />
          <div>
            마카롱<p>3500원</p>
          </div>
        </ImageContainer>
      </ContentCenter>
    </FlexRowDiv>
  );
}

export default ReviewContents;
