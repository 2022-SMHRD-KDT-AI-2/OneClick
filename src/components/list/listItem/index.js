import React from "react";
import styled from "@emotion/styled";
import "./index.css";
import { FlexColumnDiv, FlexRowDiv } from "../../../styles";
import { emptyCheck } from "../../../utils/functions";

const ListItemContainer = styled.div`
  border-radius: 4px;
  border: 1px solid gray;
  width: 95%;
  height: 100%;
  margin-top: 40px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

function ListItem({ data }) {
  const { url, name, address, table, occupied_tables, upperDizName } = data;
  return (
    <ListItemContainer>
      <FlexRowDiv>
        <Img src={url} />
        <FlexColumnDiv className="shop">
          {[name, upperDizName, address].map((item, index) => {
            return emptyCheck(item, item);
          })}
          <div>
            {emptyCheck(occupied_tables, occupied_tables)} /{" "}
            {emptyCheck(table, table)}
          </div>
        </FlexColumnDiv>
      </FlexRowDiv>
    </ListItemContainer>
  );
}

export default ListItem;
