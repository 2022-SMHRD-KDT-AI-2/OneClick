import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    preset: [],
  },
});
