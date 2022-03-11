import React, { useState } from "react";

import styled from "@emotion/styled";
import { comment, reviewTitle } from "../../../utils/data";

const reviewScore = [4.1, 2.5, 3.3, 5, 1];

const InfoWindowContainer = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 300px;
    height: 300px;
  }
`;

const Contents = styled.div``;

const Footer = styled.div``;

const Button = styled.button``;

const Label = styled.label``;

const ShopInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: green;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
`;

const Closebutton = styled.button`
  position: absolute;
  font-size: 1rem;
  background-color: white;
  border: 0px;
  right: 10px;
  top: 10px;
`;

function Review({ data }) {
  const {
    id,
    title,
    addr,
    category,
    tell,
    sns,
    opTime,
    breaktime,
    hoilday,
    parking,
  } = data;

  function star(number) {
    const num = Math.round(number);
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += "⭐";
    }
    return result;
  }

  return (
    <div>
      <InfoWindowContainer>
        <Closebutton id={id}>❌</Closebutton>
        <Header>
          <Image />
          <ShopInfo>
            <ColumnDiv>
              <Label>상호</Label>
              <Label>분류</Label>
              <Label>주소</Label>
              <Label>연락처</Label>
              <Label>SNS</Label>
              <Label>영업시간</Label>
              <Label>브레이크타임</Label>
              <Label>휴무일</Label>
              <Label>주차</Label>
            </ColumnDiv>
            <ColumnDiv>
              <Label>{title}</Label>
              <Label>{category}</Label>
              <Label>{addr}</Label>
              <Label>{tell}</Label>
              <Label>{sns}</Label>
              <Label>{opTime}</Label>
              <Label>{breaktime}</Label>
              <Label>{hoilday}</Label>
              <Label>{parking}</Label>
            </ColumnDiv>
          </ShopInfo>
          <div>
            <Label>혼잡도</Label>
            <Circle />
            <Label>좌석</Label>
            <div>
              {5}/{5}
            </div>
          </div>
        </Header>
        <Contents>
          <RowDiv>
            <ColumnDiv>
              {comment.map((item, key) => {
                return <div key={key}>{item}</div>;
              })}
            </ColumnDiv>
            <ColumnDiv>
              <ColumnDiv>
                <Label>만족도</Label>
                {reviewTitle.map((item, index) => {
                  return (
                    <div key={index}>
                      <div>{item}</div>
                      <div>{star(reviewScore[index])}</div>
                      <div>{reviewScore[index]}</div>
                    </div>
                  );
                })}
                <ImageContainer>
                  <Image />
                </ImageContainer>
              </ColumnDiv>
            </ColumnDiv>
          </RowDiv>
        </Contents>
        <Footer>
          <Button id={`${id}addReview`}>리뷰작성</Button>
          <Button>주차장찾기</Button>
          <Button>차량길찾기</Button>
          <Button>도보길찾기</Button>
        </Footer>
      </InfoWindowContainer>
    </div>
  );
}

export default Review;
