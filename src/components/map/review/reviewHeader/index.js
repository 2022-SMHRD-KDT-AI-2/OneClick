import React from "react";
import { emptyCheck } from "../../../../utils/functions";
import {
  Circle,
  ColumnDiv,
  Header,
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
    <Header>
      <Image />
      <ShopInfo>
        <ColumnDiv>
          <div>👨🏻‍🍳SHOP 소개👨🏻‍🍳</div>
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
              ].map((item, index) => {
                return emptyCheck(item, index);
              })}
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
          {emptyCheck(occupied_tables, 0)} / {emptyCheck(table, 0)}
        </div>
      </div>
    </Header>
  );
}

export default ReviewHeader;
