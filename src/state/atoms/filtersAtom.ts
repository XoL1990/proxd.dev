import Technology from "enums/technology";
import { atom } from "recoil";

const filtersAtom = atom<Technology[]>({
  key: "filtersAtom",
  default: [],
});

export default filtersAtom;
