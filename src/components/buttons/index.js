import React, { useState } from "react";
import Button from "./button";
import { useRecoilState } from "recoil";
import { userData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer } from "./styles";

function Buttons() {
  const [user, setUser] = useRecoilState(userData);
  const [openModal, setOpenModal] = useState(false);

  return (
    <ButtonsContainer>
      {user.preset.map((item, index) => {
        return <Button key={index} title={item.keyword} />;
      })}
      <Button title="+" toggle={setOpenModal} />
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
