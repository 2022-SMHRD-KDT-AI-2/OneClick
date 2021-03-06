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
      result += "β­";
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
      <Image
        src={`http://localhost:7501${title_img}`}
        style={{ height: "220px", margin: "1rem" }}
      />
      <ShopInfo>
        <ColumnDiv>
          <Shoptitle>π¨π»βπ³SHOP μκ°π¨π»βπ³</Shoptitle>
          <RowDiv>
            <ColumnDiv>
              <Label>μνΈ</Label>
              <Label>λΆλ₯</Label>
              <Label>μ£Όμ</Label>
              <Label>μ°λ½μ²</Label>
              <Label>SNS</Label>
              <Label>μμμκ°</Label>
              <Label>λΈλ μ΄ν¬νμ</Label>
              <HoildayColor>ν΄λ¬΄μΌ</HoildayColor>
              <Label>μ£Όμ°¨κ³΅κ°</Label>
            </ColumnDiv>
            <ColumnDiv style={{ width: "250px", overflow: "hidden" }}>
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
          <StarTitle>πλ³μ  λ§μ‘±λπ</StarTitle>
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
                return <List4 key={index}>{item ? item : ""}</List4>;
              })}
            </StarContent>
          </StarContentTitle>
        </StarLine>
      </StarAll>
    </Header>
  );
}

export default ReviewHeader;
