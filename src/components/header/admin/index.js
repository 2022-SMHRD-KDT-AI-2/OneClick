import React, { useEffect, useState } from "react";
import { userData, location, shopData } from "../../../atom/atom";
import { useRecoilValue } from "recoil";
import { FlexRowDiv, ModalBackground } from "../../../styles";
import { AdminModal } from "../styles";
import axios from "axios";
import useInput from "../../../utils/useInput";
import {
  Button,
  Input,
  NormalButton,
  Label,
} from "../../../pages/login/styles";
import { PresetButtons } from "../../buttons/styles";
import styled from "@emotion/styled";
import SearchShop from "./searchShop";
import EditShop from "./editShop";

function Admin({ setOpenModal }) {
  const user = useRecoilValue(userData);
  const [hasShop, setHasShop] = useState(false);

  useEffect(() => {
    if (user.shop) {
      setHasShop(true);
    }
  }, [user]);

  return (
    <ModalBackground onClick={() => setOpenModal(false)}>
      <AdminModal onClick={(e) => e.stopPropagation()}>
        {hasShop ? (
          <EditShop />
        ) : (
          <SearchShop setOpenModal={setOpenModal} setHasShop={setHasShop} />
        )}
      </AdminModal>
    </ModalBackground>
  );
}

export default Admin;

/*<div>
  <ModalButton>수정</ModalButton>
  <ModalButton onClick={() => setOpenModal(false)}>취소</ModalButton>
</div>*/
