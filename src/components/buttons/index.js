import React, { useEffect, useMemo, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { presetData, shopData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer, Button } from "./styles";
import axios from "axios";
import { defaultPreset } from "../../utils/data";
import { Cookies } from "react-cookie";
import SearchButton from "./searchButton";

function Buttons() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setShop = useSetRecoilState(shopData);
  const preset = useRecoilValue(presetData);
  const cookies = useMemo(() => new Cookies(), []);

  const onClickSearch = () => {
    // 키워드에 맞게 검색하기
    axios
      .post("http://localhost:7501/shops/search", {
        lat: 35.10928780737578,
        long: 126.87626628837687,
      })
      .then((res) => {
        console.log(res.data);
        setShop(res.data);
      });
  };

  useEffect(() => {
    if (cookies.get("token")) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [preset, cookies]);

  return (
    <ButtonsContainer>
      {defaultPreset.map((item, index) => {
        return (
          <SearchButton
            key={index}
            keyword={item.keyword}
            category={item.category}
          />
        );
      })}
      {isLoggedIn &&
        preset.map((item, index) => {
          return (
            <SearchButton
              key={index}
              keyword={item.keyword}
              category={item.category}
            />
          );
        })}
      {isLoggedIn && <Button onClick={() => setOpenModal(true)}>+</Button>}
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
