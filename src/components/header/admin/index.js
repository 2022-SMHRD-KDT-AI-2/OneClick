import React, { useEffect, useState } from "react";
import { userData } from "../../../atom/atom";
import { useRecoilValue } from "recoil";
import { ModalBackground } from "../../../styles";
import { AdminModal } from "../styles";
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
          <EditShop setOpenModal={setOpenModal} />
        ) : (
          <SearchShop setOpenModal={setOpenModal} setHasShop={setHasShop} />
        )}
      </AdminModal>
    </ModalBackground>
  );
}

export default Admin;
