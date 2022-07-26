import LocalStorageKey from "enums/localStorageKey";
import Theme from "enums/theme";
import { atom } from "recoil";

const restoredTheme = localStorage.getItem(LocalStorageKey.theme);

const themeAtom = atom<Theme>({
  key: "themeAtom",
  default: restoredTheme ? +restoredTheme : Theme.dark,
  effects: [
    ({ onSet }) => {
      onSet((newTheme) => {
        localStorage.setItem(LocalStorageKey.theme, newTheme.toString());
      });
    },
  ],
});

export default themeAtom;
