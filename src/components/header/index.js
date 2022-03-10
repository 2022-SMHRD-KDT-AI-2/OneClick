import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const HeaderContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid gray;
  font-size: 30px;

  display: flex;
  flex: 0 0 auto;
  width: 100%;
  min-width: 1200px;
  align-items: center;
  padding: 0 40px;
`;

const Logo = styled.h3`
  width: 80%;
`;

const Link = styled.a`
  margin-left: 20px;
`;

function Header() {
  const nav = useNavigate();
  const cookie = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (cookie.get("token")) {
      setIsLoggedIn(true);
    }
  });
  return (
    <HeaderContainer>
      <Logo>OneClick</Logo>
      {isLoggedIn ? (
        <Link>ADMIN</Link>
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
