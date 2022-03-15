import React from "react";
import {
  FlexColumnDiv,
  FlexRowDiv,
  ModalBackground,
  ModalContainer,
} from "../../../../styles";
import { Button, Input, Label } from "../../../../pages/login/styles";
import styled from "@emotion/styled";
import { Image } from "../../../Map/styles";
import useSelectImage from "../../../../utils/useSelectImage";
import { PresetButtons } from "../../../buttons/styles";
import axios from "axios";
import useInputJson from "../../../../utils/useInputJson";
import { useRecoilValue } from "recoil";
import { userData } from "../../../../atom/atom";

const MenuModalContainer = styled(ModalContainer)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

function MenuModal({ setOpenMenu, fetchData }) {
  const [base64, image, onChangeImage] = useSelectImage();
  const user = useRecoilValue(userData);
  const [data, onChangeData] = useInputJson({
    title: "",
    price: "",
  });
  const { title, price } = data;

  const onClickAddMenu = () => {
    const formData = new FormData();
    formData.append("img", image);
    formData.append("id", user.shop);
    formData.append("title", title);
    formData.append("price", price);
    console.log(formData);
    axios.post("http://localhost:7501/shops/addmenu", formData).then((res) => {
      if (res.data.success) {
        setOpenMenu(false);
        fetchData();
      }
    });
  };

  return (
    <ModalBackground onClick={() => setOpenMenu(false)}>
      <MenuModalContainer onClick={(e) => e.stopPropagation()}>
        <FlexRowDiv>
          <FlexColumnDiv>
            <input type="file" onChange={onChangeImage} />
            <Image src={base64 ? base64 : ""} />
          </FlexColumnDiv>
          <FlexColumnDiv>
            <Label>
              <span>메뉴명</span>
              <Input name="title" value={title} onChange={onChangeData} />
            </Label>
            <Label>
              <span>가격</span>
              <Input name="price" value={price} onChange={onChangeData} />
            </Label>
          </FlexColumnDiv>
        </FlexRowDiv>
        <PresetButtons>
          <Button onClick={onClickAddMenu}>등록</Button>
          <Button onClick={() => setOpenMenu(false)}>취소</Button>
        </PresetButtons>
      </MenuModalContainer>
    </ModalBackground>
  );
}

export default MenuModal;
