import React, { useState } from "react";
import styled from "@emotion/styled";


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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderContainer>
      
      <Logo><img src="img/logo1.png" width="50px" /><img src="img/logo.png" width="150px" /></Logo>
      {isLoggedIn ? (
        <Link>LOGOUT</Link>
      ) : (
        <div>
          <Link>LOGIN</Link>
          <Link>SIGNUP</Link>
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;
