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
  const [exist, setExist] = useState(false);
  useEffect(() => {
    if (shop.data) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [shop.data]);

  return (
    <ListContainer>
      {exist &&
        Object.values(shop.data).map((item, index) => {
          return <ListItem data={item} key={index} />;
        })}
    </ListContainer>
  );
}

export default List;
