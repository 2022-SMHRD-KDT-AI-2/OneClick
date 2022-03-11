import React, { useState } from "react";
import { Button, Input, Label } from "../../../pages/login/styles";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userData } from "../../../atom/atom";
import { category } from "../../../utils/data";
import { ModalBackground } from "../../../styles";
import { PresetModalContainer, Select, PresetButtons } from "../styles";

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
      <PresetModalContainer onClick={(e) => e.stopPropagation()}>
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
        <PresetButtons>
          <Button onClick={() => setOpenModal(false)}>close</Button>
          <Button onClick={addPreset}>등록</Button>
        </PresetButtons>
      </PresetModalContainer>
    </ModalBackground>
  );
}

export default PresetModal;
