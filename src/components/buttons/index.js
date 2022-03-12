import React, { useState } from "react";
import Button from "./button";
import { useRecoilState } from "recoil";
import { shopData, userData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer } from "./styles";
import axios from "axios";

function Buttons() {
  const [user, setUser] = useRecoilState(userData);
  const [openModal, setOpenModal] = useState(false);
  const [shop, setShop] = useRecoilState(shopData);
  const onClickSearch = () => {
    axios
      .post("http://localhost:7501/shops/search", {
        lat: 35.10928780737578,
        long: 126.87626628837687,
      })
      .then((res) => {
        setShop(res.data);
      });
  };
  return (
    <ButtonsContainer>
      {user.preset.map((item, index) => {
        return <Button key={index} title={item.keyword} />;
      })}
      <button onClick={onClickSearch}>search</button>
      <Button title="+" toggle={setOpenModal} />
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
