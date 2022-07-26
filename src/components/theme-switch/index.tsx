import Theme from "enums/theme";
import { useRecoilState } from "recoil";
import themeAtom from "state/atoms/themeAtom";
import getClassNames from "utils/getClassNames";
import { ReactComponent as DarkItem } from "./dark-item.svg";
import { ReactComponent as LightItem } from "./light-item.svg";
import "./theme-switch.scss";

const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const handleClick = () => {
    switch (theme) {
      case Theme.dark:
        setTheme(Theme.light);
        break;
      case Theme.light:
        setTheme(Theme.dark);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="theme-switch"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      id="theme-switch"
      aria-label="Switch theme"
    >
      <div
        className={getClassNames("theme-switch__button", {
          light: true,
          active: theme === Theme.light,
        })}
      >
        <LightItem />
      </div>
      <div
        className={getClassNames("theme-switch__button", {
          dark: true,
          active: theme === Theme.dark,
        })}
      >
        <DarkItem />
      </div>
    </div>
  );
};

export default ThemeSwitch;
