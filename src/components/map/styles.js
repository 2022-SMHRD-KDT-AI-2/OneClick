import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../../styles";

export const InfoWindowContainer = styled.div`
  width: 900px;
  height: 800px;
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

export const List_1 = styled.p`
  width: 350px;
  background-color: #c9daff;
  border: 1px solid #86adff;
  padding: 8px;
  margin: 8px;
  margin-left: 3px;
  margin-bottom: 3px;
  border-radius: 5px;
`;

export const List_2 = styled.p`
  background-color: whitesmoke;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  margin-bottom: 3px;
  fontsize: 10px;
  border-radius: 5px;
`;

export const List_3 = styled.p`
  padding: 3px;
  margin: 5px;
  width: 200px;
`;

export const List_4 = styled.p`
  padding: 10.5px;
`;

export const Footer = styled.div`
  textalign: center;
`;

export const ContentCenter = styled.div`
  textalign: center;
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
  fontsize: 30px;
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
  flexdirection: column;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  height: 150px;
  width: 140px;
  margin: 5px;
  border-radius: 10px;
`;

export const Closebutton = styled.button`
  position: absolute;
  font-size: 1rem;
  background-color: white;
  border: 0px;
  right: 10px;
  top: 10px;
`;

export const HoildayColor = styled.div`
  color: red;
`;

export const Shoptitle = styled.div`
  fontsize: 25px;
`;

export const StarContent = styled.div`
  display: flex;
  flexdirection: column;
  backgroundcolor: whitesmoke;
`;

export const StarContentTitle = styled.div`
  display: flex;
  textalign: center;
  width: 500px;
  flexdirection: row;
`;

export const StarTitle = styled.div`
  fontsize: 20px;
  width: 350px;
`;

export const StarLine = styled.div`
  width: 200px;
  textalign: center;
`;

export const StarAll = styled.div`
  display: flex;
  flexdirection: column;
  width: 200px;
  justifycontent: center;
  alignitems: center;
  marginleft: 50px;
`;

export const Menu = styled.div`
  margin: 2px;
  fontsize: 20px;
  textalign: center;
  width: 500px;
`;

export const ContentsAll = styled.div`
  textalign: center;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const ContentsTitle = styled.div`
  fontsize: 20px;
  margin: 2px;
`;

export const StarRating = styled(FlexColumnDiv)``;
