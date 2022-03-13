import React, { useState } from "react";
import Button from "./button";
import { useRecoilState, useRecoilValue } from "recoil";
import { shopData, userData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer } from "./styles";
import axios from "axios";
import { defaultPreset } from "../../utils/data";

function Buttons() {
  const [openModal, setOpenModal] = useState(false);
  const [shop, setShop] = useRecoilState(shopData);
  const user = useRecoilValue(userData);
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
      {user.data
        ? user.preset.map((item, index) => {
            return <Button key={index} title={item.keyword} />;
          })
        : defaultPreset.map((item, index) => {
            return <Button key={index} title={item.keyword}></Button>;
          })}
      <button onClick={onClickSearch}>search</button>
      <Button title="+" toggle={setOpenModal} />
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
