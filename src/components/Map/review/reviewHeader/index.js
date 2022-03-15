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
import { emptyCheck } from "../../../../utils/functions";

const reviewScore = [4.1, 2.5, 3.3, 5, 1];

function ReviewHeader({ data, score }) {
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
    title_img,
  } = data;

  return (
    <Header>
      {id && table && occupied_tables}
      <Image src={`http://localhost:7501${title_img}`} />
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
              {[
                name,
                upperBizName,
                address,
                tell,
                url,
                opTime,
                breaktime,
                hoilday,
                parking,
              ].map((item, index) => emptyCheck(item, index))}
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
              {score.map((item, index) => {
                return <List3 key={index}>{star(item)}</List3>;
              })}
            </StarContent>

            <StarContent>
              {score.map((item, index) => {
                return <List4 key={index}>{item}</List4>;
              })}
            </StarContent>
          </StarContentTitle>
        </StarLine>
      </StarAll>
    </Header>
  );
}

export default ReviewHeader;
