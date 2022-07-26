import ThemeSwitch from "components/theme-switch";
import Year from "components/year";
import React from "react";
import "./header.scss";

const Header = React.memo(() => (
  <header className="header">
    <Year />
    <h1 className="header__header">Adam Małyszko</h1>
    <p className="header__description">I am a creative developer with a passion.</p>
    <ThemeSwitch />
  </header>
));

export default Header;
