import Footer from "components/footer";
import Header from "components/header";
import Logo from "components/logo";
import Skills from "components/skills";
import Tiles from "components/tiles";
import Theme from "enums/theme";
import { useRecoilValue } from "recoil";
import themeAtom from "state/atoms/themeAtom";
import "./App.scss";

const App = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className={`theme-${Theme[theme]}`}>
      <div className="app">
        <div className="app__container">
          <Logo />
          <Header />
          <Skills />
          <Tiles />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
