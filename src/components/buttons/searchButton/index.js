import React from "react";
import { Button } from "../styles";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { shopData } from "../../../atom/atom";

function SearchButton({ keyword, category }) {
  const setShop = useSetRecoilState(shopData);
  const onClickSearchButton = () => {
    axios
      .post("http://localhost:7501/shops/search", {
        lat: 35.10928780737578,
        long: 126.87626628837687,
        keyword: keyword,
        category: category,
      })
      .then((res) => {
        setShop(res.data.data);
      });
  };
  return <Button onClick={onClickSearchButton}>{keyword}</Button>;
}

export default SearchButton;
