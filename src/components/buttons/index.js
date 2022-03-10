import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Button from "./button";
import {useRecoilState} from "recoil";
import {userData} from "../../atom/atom";
import PresetModal from "./presetModal";

const ButtonsContainer = styled.div`
  min-width: 900px;
  width: 80%;
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

function Buttons() {
  const [user, setUser] = useRecoilState(userData);
  const [openModal, setOpenModal] = useState(false);

  return (
      <ButtonsContainer>
        {user.preset.map((item, index) => {
          return <Button key={index} title={item.keyword}/>;
        })}
        <Button title="+" toggle={setOpenModal}/>
        {openModal && <PresetModal setOpenModal={setOpenModal}/>}
      </ButtonsContainer>
  );
}

export default Buttons;
