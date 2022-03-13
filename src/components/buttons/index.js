import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { presetData, shopData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer, Button } from "./styles";
import axios from "axios";
import { defaultPreset } from "../../utils/data";
import { Cookies } from "react-cookie";

function Buttons() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setShop = useSetRecoilState(shopData);
  const preset = useRecoilValue(presetData);
  const cookies = useMemo(() => new Cookies(), []);

  const temp = useCallback(() => {}, []);

  const onClickSearch = (e) => {
    // 키워드에 맞게 검색하기
    axios
      .post("http://localhost:7501/shops/search", {
        lat: 35.10928780737578,
        long: 126.87626628837687,
      })
      .then((res) => {
        setShop(res.data);
      });
  };

  useEffect(() => {
    if (cookies.get("token")) setIsLoggedIn(true);
  }, [cookies]);

  return (
    <ButtonsContainer>
      {defaultPreset.map((item, index) => {
        return <Button key={index}>{item.keyword}</Button>;
      })}
      {isLoggedIn &&
        preset.map((item, index) => {
          return (
            <Button key={index} onClick={onClickSearch}>
              {item.keyword}
            </Button>
          );
        })}
      {isLoggedIn && <Button onClick={() => setOpenModal(true)}>+</Button>}
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
