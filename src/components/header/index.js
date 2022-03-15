import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import Admin from "./admin";
import { Logo, Link, HeaderContainer } from "./styles";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { presetData, shopData, userData } from "../../atom/atom";
import { URL } from "../../utils/data";

axios.defaults.withCredentials = true;

function Header() {
  const nav = useNavigate();
  const cookies = useMemo(() => new Cookies(), []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const setUserData = useSetRecoilState(userData);
  const setPresetData = useSetRecoilState(presetData);
  const setShopData = useSetRecoilState(shopData);

  const logout = () => {
    axios.get(URL + "/users/logout").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        setIsLoggedIn(false);
        setUserData(null);
        setPresetData([]);
        setShopData([]);
        setIsLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    if (cookies.get("token")) {
      setIsLoggedIn(true);
    }
  }, [cookies]);
  return (
    <HeaderContainer>
      {openModal && <Admin setOpenModal={setOpenModal} />}
      <Logo>OneClick</Logo>
      {isLoggedIn ? (
        <div>
          <Link onClick={() => setOpenModal(true)}>ADMIN</Link>
          <Link onClick={logout}>LOGOUT</Link>
        </div>
      ) : (
        <div>
          <Link
            onClick={() => {
              nav("/login");
            }}
          >
            LOGIN
          </Link>
          <Link
            onClick={() => {
              nav("/signup");
            }}
          >
            SIGNUP
          </Link>
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;
