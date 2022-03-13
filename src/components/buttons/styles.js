import styled from "@emotion/styled";
import { ModalContainer } from "../../styles";
import { categoryColors } from "../../utils/data";

export const ButtonsContainer = styled.div`
  min-width: 900px;
  width: 80%;
  border-right: 1px solid gray;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

export const PresetModalContainer = styled(ModalContainer)`
  border-radius: 1rem;
  width: 50%;
  min-width: 500px;
  min-height: 420px;
  flex-direction: column;
  padding: 1rem;
`;

export const Select = styled.select`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 11px 12px 13px 12px;
  height: 44px;
  font-size: 18px;
  line-height: 1.33333333;
`;

export const PresetButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > * {
    margin: 0.3rem;
  }
`;

export const ButtonContainer = styled.button`
  border-radius: 0.5rem;
  height: 40px;
  width: 100px;
  text-align: center;
  margin-left: 5px;
  background-color: ${categoryColors.button};
  color: white;
  font-weight: bold;
  font-size: 20px;
`;
