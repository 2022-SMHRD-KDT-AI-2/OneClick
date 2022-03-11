import styled from "@emotion/styled";
import { ModalContainer } from "../../styles";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableName = styled.div`
  margin: 10px 10px 10px 40px;
  width: 15%;
  min-width: 100px;
  overflow: scroll;
`;

export const TableContent = styled.input`
  margin: 10px 10px 10px 60px;
  width: 70%;
  overflow: scroll;

  > input {
  }
`;

export const AdminModal = styled(ModalContainer)`
  width: 60%;
  height: 80%;
  flex-direction: column;
  padding: 25px;
`;

export const ModalButton = styled.button``;

export const Logo = styled.h3`
  width: 80%;
`;

export const Link = styled.a`
  margin-left: 20px;
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
