import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, Input, Label } from "../../../pages/login/styles";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userData } from "../../../atom/atom";
import { category } from "../../../utils/data";

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const ModalContainer = styled.div`
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;

  width: 50%;
  min-width: 500px;
  min-height: 420px;

  padding: 1rem;
`;

const Select = styled.select`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
`;

const TwoButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > * {
    margin: 0.3rem;
  }
`;

function PresetModal({ setOpenModal }) {
  const [user, setUser] = useRecoilState(userData);
  const [keyword, setKeyword] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const onChangeCategory1 = (e) => {
    setCategory1(e.target.value);
  };
  const onChangeCategory2 = (e) => {
    setCategory2(e.target.value);
  };
  const onChangeCategory3 = (e) => {
    setCategory3(e.target.value);
  };
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const addPreset = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7501/users/preset", {
        keyword: keyword,
        category1: category1,
        category2: category2,
        category3: category3,
      })
      .then((res) => {
        setUser({
          admin: user.admin,
          preset: [...user.preset, ...res.data.preset],
        });
        setOpenModal(false);
      });
  };
  return (
    <ModalBackground onClick={() => setOpenModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Label>
          <span>검색어</span>
          <Input value={keyword} onChange={onChangeKeyword} />
        </Label>
        <Label>
          <span>카테고리</span>
          <div>
            <Select onChange={onChangeCategory1}>
              <option>카테고리를 선택해주세요!</option>
              {category.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </div>
          <div>
            <Select>
              <option>카테고리를 선택해주세요!</option>
              {category.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </div>
          <div>
            <Select>
              <option>카테고리를 선택해주세요!</option>
              {category.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </div>
        </Label>
        <TwoButtons>
          <Button onClick={() => setOpenModal(false)}>close</Button>
          <Button onClick={addPreset}>등록</Button>
        </TwoButtons>
      </ModalContainer>
    </ModalBackground>
  );
}

export default PresetModal;
