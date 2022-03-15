import React from "react";
import { Label } from "../../../../pages/login/styles";

function Menu({ menu }) {
  const { img_src, title, price } = menu;
  return (
    <Label style={{ margin: "1rem" }}>
      <img
        src={"http://localhost:7501" + img_src}
        style={{ width: "200px", height: "200px" }}
      />
      <div>
        <span>{title}</span>
        <span>{price}</span>
      </div>
    </Label>
  );
}

export default Menu;
