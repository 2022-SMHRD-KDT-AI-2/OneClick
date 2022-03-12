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
  font-size: 15px;
  font-family: ONE-Mobile-POP;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 200px;
    height: 210px;
  }
`;

const Contents = styled.div``;

const List_1 = styled.p`
  width: 350px;
  background-color: #c9daff;
  border: 1px solid #86adff;
  padding: 8px;
  margin: 8px;
  margin-left: 3px;
  margin-bottom: 3px;
  border-radius: 5px;
`;

const List_2 = styled.p`
  background-color: whitesmoke;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  margin-bottom: 3px;
  fontsize: 10px;
  border-radius: 5px;
`;

const List_3 = styled.p`
  padding: 3px;
  margin: 5px;
  width: 320px;
`;

const List_4 = styled.p`
  padding: 10.5px;
`;

const Footer = styled.div`
  textalign: center;
`;

const ContentCenter = styled.div`
  textalign: center;
  display: flex;
  flex-direction: column;
`;

const ButtonsClick = styled.button`
  background-color: white;
  color: black;
  border: 3px solid #008cba;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  margin: 15px;
  font-family: ONE-Mobile-POP;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: #008cba;
    color: white;
  }
`;

const ButtonsReview = styled.button`
  background-color: white;
  color: black;
  border: 3px solid #ff7a85;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  margin: 15px;
  font-family: ONE-Mobile-POP;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: #ff7a85;
    color: white;
  }
`;

const Label = styled.label`
  fontsize: 30px;
  margin: 2px;
`;

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
  display: flex;
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
  width: 220px;
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
<<<<<<< Updated upstream
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
=======
    <InfoWindowContainer>
      <Closebutton id={id}>❌</Closebutton>
      <Header>
        <Image />
        <ShopInfo>
          <ColumnDiv>
            <div
              style={{
                fontSize: "25px",
              }}
            >
              👨🏻‍🍳SHOP 소개👨🏻‍🍳
            </div>
            <RowDiv>
              <ColumnDiv>
                <Label>상호</Label>
                <Label>분류</Label>
                <Label>주소</Label>
                <Label>연락처</Label>
                <Label>SNS</Label>
                <Label>영업시간</Label>
                <Label>브레이크타임</Label>
                <Label
                  style={{
                    color: "red",
                  }}
                >
                  휴무일
                </Label>
                <Label>주차공간</Label>
              </ColumnDiv>
              <ColumnDiv>
                <Label>{title}</Label>
                <Label>{category}</Label>
                <Label>{addr}</Label>
                <Label>{tell}</Label>
                <Label>{sns}</Label>
                <Label>{opTime}</Label>
                <Label>{breaktime}</Label>
                <Label
                  style={{
                    color: "red",
                  }}
                >
                  {hoilday}
                </Label>
                <Label>{parking}</Label>
              </ColumnDiv>
            </RowDiv>
          </ColumnDiv>
        </ShopInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "230px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "30px",
          }}
        >
          <Label
            style={{
              height: "30px",
              fontSize: "25px",
              color: "blue",
            }}
          >
            혼잡도
          </Label>
          <Circle />

          <Label
            style={{
              fontSize: "25px",
              color: "blue",
              marginTop: "20px",
            }}
          >
            좌석
          </Label>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            {5}/{5}
          </div>
        </div>
      </Header>
      <hr></hr>
      <Contents>
        <RowDiv>
          <ContentCenter
            style={{
              textAlign: "center",
              width: "500px",
            }}
          >
            <Label
              style={{
                fontSize: "20px",
              }}
            >
              💙한줄평 리뷰💙
            </Label>
            {comment.map((item, key) => {
              return <List_1 key={key}>{item}</List_1>;
            })}
          </ContentCenter>
          <ColumnDiv
            style={{
              width: "455px",
              textAlign: "center",
            }}
          >
            <Label
              style={{
                fontSize: "20px",
              }}
            >
              💙별점 만족도💙
            </Label>
            <ContentCenter
              style={{
                textAlign: "center",
                width: "500px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "whitesmoke",
                }}
              >
                {reviewTitle.map((item, index) => {
                  return <List_2>{item}</List_2>;
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "whitesmoke",
                }}
              >
                {reviewTitle.map((item, index) => {
                  return <List_3>{star(reviewScore[index])}</List_3>;
                })}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "whitesmoke",
                }}
              >
                {reviewTitle.map((item, index) => {
                  return <List_4>{reviewScore[index]}</List_4>;
                })}
              </div>
            </ContentCenter>
            <ImageContainer>
              <Image />
              <Image />
            </ImageContainer>
          </ColumnDiv>
        </RowDiv>
      </Contents>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <ButtonsReview id={`${id}addReview`}>리뷰작성</ButtonsReview>
        <ButtonsClick>주차장찾기</ButtonsClick>
        <ButtonsClick>차량길찾기</ButtonsClick>
        <ButtonsClick>도보길찾기</ButtonsClick>
      </Footer>
    </InfoWindowContainer>
>>>>>>> Stashed changes
  );
}

export default Review;
