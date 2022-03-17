import React from "react";
import styled from "@emotion/styled";
import "./index.css";
import { FlexColumnDiv, FlexRowDiv } from "../../../styles";
import { emptyCheck } from "../../../utils/functions";
import { Label } from "../../map/styles";

const ListItemContainer = styled.div`
  border-radius: 4px;
  border: 1px solid gray;
  width: 95%;
  height: 9.35rem;
  margin-top: 40px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Info = styled(FlexColumnDiv)`
  > * {
    flex-grow: 1;
  }
`;

function ListItem({ data }) {
  const {
    id,
    url,
    name,
    address,
    table,
    occupied_tables,
    upperBizName,
    title_img,
  } = data;
  const openReviewInfoWindow = () => {
    document.getElementById(`${id}marker`).click();
  };
  return (
    <ListItemContainer onClick={openReviewInfoWindow}>
      <FlexRowDiv>
        <Img src={`http://localhost:7501${title_img}`} />
        <Info style={{ width: "70px", textAlign: "center" }}>
          {["상호명", "분류", "주소", "SNS", "테이블"].map((item, index) => {
            return <Label key={index}>{item}</Label>;
          })}
        </Info>
        <Info className="shop">
          {[name, upperBizName, address, url].map((item, index) => {
            return emptyCheck(item, item);
          })}
          <div>
            {emptyCheck(occupied_tables, occupied_tables)} /{" "}
            {emptyCheck(table, table)}
          </div>
        </Info>
      </FlexRowDiv>
    </ListItemContainer>
  );
}

export default ListItem;
