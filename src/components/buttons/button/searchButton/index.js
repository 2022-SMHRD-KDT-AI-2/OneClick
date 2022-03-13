import React from "react";
import { ButtonContainer } from "../styles";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { shopData } from "../../../../atom/atom";

function SearchButton({ title, data }) {
  const { keyword, category1 } = data;
  const setShop = useSetRecoilState(shopData);
  const onClickSearchButton = () => {
    axios.post("http://localhost:7501/shops/findall").then((res) => {
      setShop(res.data);
    });
  };
  return (
    <ButtonContainer onClick={onClickSearchButton}>{keyword}</ButtonContainer>
  );
}

export default SearchButton;
