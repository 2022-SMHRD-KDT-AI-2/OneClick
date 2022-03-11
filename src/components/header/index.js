import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import Admin from "./admin";
import { Logo, Link, HeaderContainer } from "./styles";

function Header() {
  const nav = useNavigate();
  const cookie = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (cookie.get("token")) {
      setIsLoggedIn(true);
    }
  });
  return (
    <HeaderContainer>
      {openModal && <Admin setOpenModal={setOpenModal} />}
      <Logo>OneClick</Logo>
      {isLoggedIn ? (
        <Link onClick={() => setOpenModal(true)}>ADMIN</Link>
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
