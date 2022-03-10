import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    admin: false,
    preset: [
      {
        keyword: "커피",
        category: "카페",
      },
      {
        keyword: "커피",
        category: "카페",
      },
      {
        keyword: "커피",
        category: "카페",
      },
      {
        keyword: "커피",
        category: "카페",
      },
      {
        keyword: "커피",
        category: "카페",
      },
    ],
  },
});

const defaultPreset = [
  {
    keyword: "커피",
    category: "카페",
  },
  {
    keyword: "커피",
    category: "카페",
  },
  {
    keyword: "커피",
    category: "카페",
  },
  {
    keyword: "커피",
    category: "카페",
  },
  {
    keyword: "커피",
    category: "카페",
  },
];
