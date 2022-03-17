import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { presetData } from "../../atom/atom";
import PresetModal from "./presetModal";
import { ButtonsContainer, Button } from "./styles";
import { categoryColors, defaultPreset } from "../../utils/data";
import { Cookies } from "react-cookie";
import SearchButton from "./searchButton";

function Buttons() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const preset = useRecoilValue(presetData);
  const cookies = useMemo(() => new Cookies(), []);

  useEffect(() => {
    if (cookies.get("token")) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [preset, cookies]);

  return (
    <ButtonsContainer>
      {defaultPreset.map((item, index) => {
        return (
          <SearchButton
            key={index}
            keyword={item.keyword}
            category={item.category}
          />
        );
      })}
      {isLoggedIn &&
        preset.map((item, index) => {
          return (
            <SearchButton
              key={index}
              keyword={item.keyword}
              category={item.category}
            />
          );
        })}
      {isLoggedIn && (
        <Button
          onClick={() => setOpenModal(true)}
          style={{
            backgroundColor: "white",
            color: "black",
            border: `3px solid ${categoryColors["button"]}`,
          }}
        >
          +
        </Button>
      )}
      {openModal && <PresetModal setOpenModal={setOpenModal} />}
    </ButtonsContainer>
  );
}

export default Buttons;
