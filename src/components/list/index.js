import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ListItem from "./listItem";
import { useRecoilValue } from "recoil";
import { shopData } from "../../atom/atom";

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
  const shop = useRecoilValue(shopData);

  return (
    <ListContainer>
      {shop &&
        shop.map((item, index) => {
          return <ListItem data={item} key={item.id} />;
        })}
    </ListContainer>
  );
}

export default List;
