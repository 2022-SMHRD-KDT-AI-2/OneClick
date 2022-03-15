import styled from "@emotion/styled";
import { FlexColumnDiv } from "../../styles";

export const InfoWindowContainer = styled.div`
  width: 900px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  font-size: 15px;
  font-family: ONE-Mobile-POP;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 200px;
    height: 210px;
  }
`;

export const Contents = styled.div``;

export const List1 = styled.p`
  width: 350px;
  background-color: #c9daff;
  border: 1px solid #86adff;
  padding: 8px;
  margin: 8px;
  margin-left: 5px;
  margin-bottom: 3px;
  border-radius: 5px;
  text-align: center;
`;

export const List2 = styled.p`
  background-color: whitesmoke;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  margin-bottom: 3px;
  font-size: 15px;
  border-radius: 5px;
`;

export const List3 = styled.p`
  padding: 2.5px;
  margin: 7px;
  width: 200px;
`;

export const List4 = styled.p`
  padding: 7px;
  margin: 3px;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const ContentCenter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ButtonsClick = styled.button`
  background-color: white;
  color: black;
  border: 3px solid #008cba;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  margin: 15px;
  font-family: ONE-Mobile-POP;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: #008cba;
    color: white;
  }
`;

export const ButtonsReview = styled.button`
  background-color: white;
  color: black;
  border: 3px solid #ff7a85;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  margin: 15px;
  font-family: ONE-Mobile-POP;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: #ff7a85;
    color: white;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin: 2px;
`;

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  height: 150px;
  width: 140px;
  margin: 5px;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 1rem;
  background-color: white;
  border: 0px;
  right: 10px;
  top: 10px;
`;

export const HoildayColor = styled.div`
  color: red;
  font-size: 16px;
  margin: 2px;
`;

export const Shoptitle = styled.div`
  font-size: 20px;
`;

export const StarContent = styled.div`
  flex-direction: row;
  background-color: whitesmoke;
`;

export const StarContentTitle = styled.div`
  display: flex;
  text-align: center;
  width: 500px;
  flex-direction: row;
`;

export const StarTitle = styled.div`
  font-size: 20px;
  width: 350px;
  text-align: center;
`;

export const StarLine = styled.div`
  width: 200px;
  textalign: center;
`;

export const StarAll = styled.div`
  display: flex;
  width: 450px;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
`;

export const Menu = styled.div`
  margin: 2px;
  font-size: 20px;
  text-align: center;
  width: 500px;
`;

export const ContentsAll = styled.div`
  text-align: center;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const ContentsTitle = styled.div`
  font-size: 20px;
  text-align: center;
  width: 400px;
`;

export const StarRating = styled(FlexColumnDiv)``;
