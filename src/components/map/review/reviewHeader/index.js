import React from "react";
import {
  ColumnDiv,
  Header,
  HoildayColor,
  Image,
  Label,
  List2,
  List3,
  List4,
  RowDiv,
  ShopInfo,
  Shoptitle,
  StarAll,
  StarContent,
  StarContentTitle,
  StarLine,
  StarTitle,
} from "../../styles";
import { reviewTitle } from "../../../../utils/data";

const reviewScore = [4.1, 2.5, 3.3, 5, 1];

function ReviewHeader({ data }) {
  function star(number) {
    const num = Math.round(number);
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += "⭐";
    }
    return result;
  }

  const {
    id,
    name,
    address,
    upperBizName,
    tell,
    url,
    opTime,
    breaktime,
    hoilday,
    parking,
    table,
    occupied_tables,
  } = data;
  return (
    <Header>
      {id && table && occupied_tables}
      <Image />
      <ShopInfo>
        <ColumnDiv>
          <Shoptitle>👨🏻‍🍳SHOP 소개👨🏻‍🍳</Shoptitle>
          <RowDiv>
            <ColumnDiv>
              <Label>상호</Label>
              <Label>분류</Label>
              <Label>주소</Label>
              <Label>연락처</Label>
              <Label>SNS</Label>
              <Label>영업시간</Label>
              <Label>브레이크타임</Label>
              <HoildayColor>휴무일</HoildayColor>
              <Label>주차공간</Label>
            </ColumnDiv>
            <ColumnDiv>
              <Label>{name}</Label>
              <Label>{upperBizName}</Label>
              <Label>{address}</Label>
              <Label>{tell}</Label>
              <Label>{url}</Label>
              <Label>{opTime}</Label>
              <Label>{breaktime}</Label>
              <HoildayColor>{hoilday}</HoildayColor>
              <Label>{parking}</Label>
            </ColumnDiv>
          </RowDiv>
        </ColumnDiv>
      </ShopInfo>
      <StarAll>
        <StarLine>
          <StarTitle>💙별점 만족도💙</StarTitle>
          <StarContentTitle>
            <StarContent>
              {reviewTitle.map((item, index) => {
                return <List2>{item}</List2>;
              })}
            </StarContent>

            <StarContent>
              {reviewTitle.map((item, index) => {
                return <List3>{star(reviewScore[index])}</List3>;
              })}
            </StarContent>

            <StarContent>
              {reviewTitle.map((item, index) => {
                return <List4>{reviewScore[index]}</List4>;
              })}
            </StarContent>
          </StarContentTitle>
        </StarLine>
      </StarAll>
    </Header>
  );
}

export default ReviewHeader;
