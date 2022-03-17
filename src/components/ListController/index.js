import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { locationData, shopData } from "../../atom/atom";

const ListControllerContainer = styled.div`
  padding: 0 20px;

  select {
    text-align: center;
    height: 40px;
    width: 100px;
  }
`;

function calcDist(from, to) {
  const x = Math.pow(from.lat - to.lat, 2);
  const y = Math.pow(from.long - to.long, 2);
  return Math.pow(x + y, 0.5);
}

function ListController() {
  const [shop, setShop] = useRecoilState(shopData);
  const loc = useRecoilValue(locationData);

  const onClickSortDist = useCallback(
    (e) => {
      if (e.target.value === "dist") {
        if (shop != []) {
          const temp = [...shop];
          temp.sort((b, a) => {
            return (
              calcDist(loc, { lat: b.lat, long: b.long }) -
              calcDist(loc, { lat: a.lat, long: a.long })
            );
          });
          setShop(temp);
        }
      }
    },
    [shop]
  );
  return (
    <ListControllerContainer>
      <select style={{ marginRight: "1rem" }} onChange={onClickSortDist}>
        <option value="default">정렬</option>
        <option value="dist" onChange={onClickSortDist}>
          거리순
        </option>
        <option value="review" onChange={onClickSortDist}>
          리뷰많은순
        </option>
      </select>
    </ListControllerContainer>
  );
}

export default ListController;
