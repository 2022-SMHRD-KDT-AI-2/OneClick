import React, { useCallback } from "react";
import { Button, Input, Label } from "../../../pages/login/styles";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { presetData } from "../../../atom/atom";
import { categories } from "../../../utils/data";
import { ModalBackground } from "../../../styles";
import { PresetModalContainer, Select, PresetButtons } from "../styles";
import useInputJson from "../../../utils/useInputJson";

function PresetModal({ setOpenModal }) {
  const setPreset = useSetRecoilState(presetData);
  const [formData, onChangeFormData] = useInputJson({
    keyword: "",
    category: "",
  });
  const { keyword, category } = formData;

  const addPreset = useCallback(
    (e) => {
      e.preventDefault();
      if (category && keyword) {
        axios
          .post("http://localhost:7501/users/preset", {
            keyword: keyword,
            category: category,
          })
          .then((res) => {
            if (res.data.success) {
              setPreset(res.data.preset);
              setOpenModal(false);
            }
          });
      } else {
        alert("모든 정보를 입력해주세요!");
      }
    },
    [keyword, category, setOpenModal, setPreset]
  );
  return (
    <ModalBackground onClick={() => setOpenModal(false)}>
      <PresetModalContainer onClick={(e) => e.stopPropagation()}>
        <Label>
          <span>검색어</span>
          <Input value={keyword} name="keyword" onChange={onChangeFormData} />
        </Label>
        <Label>
          <span>카테고리</span>
          <div>
            <Select name="category" onChange={onChangeFormData}>
              <option>카테고리를 선택해주세요!</option>
              {categories.map((item, index) => {
                return (
                  <option
                    key={index}
                    name="category"
                    value={item}
                    onChange={onChangeFormData}
                  >
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
