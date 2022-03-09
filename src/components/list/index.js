import React from "react";
import styled from "@emotion/styled";
import ListItem from "./listItem";

const ListContainer = styled.div`
  border-left: 1px solid gray;
  height: 100%;
  width: calc(20% - 1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

function List() {
  return (
    <ListContainer>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListContainer>
  );
}

export default List;
