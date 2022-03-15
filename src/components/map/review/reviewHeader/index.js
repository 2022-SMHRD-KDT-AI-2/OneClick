import React from "react";
import { emptyCheck } from "../../../../utils/functions";
import {
  Circle,
  ColumnDiv,
  Header,
  HoildayColor,
  Image,
  Label,
  RowDiv,
  ShopInfo,
} from "../../styles";

function ReviewHeader({ data }) {
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
    <>
      <Header>
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
                <Label>{title}</Label>
                <Label>{category}</Label>
                <Label>{addr}</Label>
                <Label>{tell}</Label>
                <Label>{sns}</Label>
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
                  return <List_2>{item}</List_2>;
                })}
              </StarContent>
              <StarContent>
                {reviewTitle.map((item, index) => {
                  return <List_3>{star(reviewScore[index])}</List_3>;
                })}
              </StarContent>

              <StarContent>
                {reviewTitle.map((item, index) => {
                  return <List_4>{reviewScore[index]}</List_4>;
                })}
              </StarContent>
            </StarContentTitle>
          </StarLine>
        </StarAll>
      </Header>
      <hr></hr>
    </>
  );
}

export default ReviewHeader;
