import styled from "@emotion/styled";

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const ModalContainer = styled.div`
  // without width, height, padding, flex-direction
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
`;
