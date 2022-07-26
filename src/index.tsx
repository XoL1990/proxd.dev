import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import debounce from "utils/debounce";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);

const updateVH = debounce(() => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}, 500);

window.addEventListener("resize", updateVH);
updateVH();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log);
