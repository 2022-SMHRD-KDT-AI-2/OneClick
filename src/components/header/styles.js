import styled from "@emotion/styled";
import { ModalContainer } from "../../styles";
import { LinkContainer } from "../../pages/login/styles";

export const AdminModal = styled(ModalContainer)`
  width: 60%;
  //height: 80%;
  flex-direction: column;
  padding: 25px;
  min-width: 500px;
`;

export const Logo = styled.h3`
  width: 80%;
`;

export const Link = styled(LinkContainer)`
  margin-left: 20px;
  font-size: 1.5rem;
  color: black;
`;

export const HeaderContainer = styled.div`
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
