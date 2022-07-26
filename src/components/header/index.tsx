import ThemeSwitch from "components/theme-switch";
import Year from "components/year";
import React from "react";
import "./header.scss";

const Header = React.memo(() => (
  <header className="header">
    <Year />
    <h1 className="header__header">Adam Małyszko</h1>
    <p className="header__description">
      A wise man said.{" "}
      <i>“Choose a job you love and you won’t have to work a single day in your life.”</i>
      <br />
      This is how I have been able to develop my passion for programming for 10 years.
      <br />
      If you are looking for a man for special tasks, you’ve come to the right place.
    </p>
    <ThemeSwitch />
  </header>
));

export default Header;
