import React from "react";
import { MainContainer, Options, Contents } from "./styles";

import Buttons from "../../components/buttons";
import Map from "../../components/map";
import Header from "../../components/header";
import List from "../../components/list";
import ListController from "../../components/ListController";

function Main() {
  return (
    <MainContainer>
      <Header />
      <Options>
        <Buttons />
        <ListController />
      </Options>
      <Contents>
        <Map />
        <List />
      </Contents>
    </MainContainer>
  );
}

export default Main;
