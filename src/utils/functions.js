import React from "react";
import { Label } from "../pages/login/styles";

export function emptyCheck(str, index) {
  return str ? (
    <Label key={index}>{str}</Label>
  ) : (
    <Label key={index}>{" - "}</Label>
  );
}
