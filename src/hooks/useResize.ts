import { useEffect, useState } from "react";

type Breakpoints = { [key: string]: number } | undefined;

const getCurrentBreakpoints = (breakpoints: Breakpoints, width: number) => {
  const normalizedBreakpoints =
    breakpoints && Object.entries(breakpoints).sort((a, b) => b[1] - a[1]);
  return normalizedBreakpoints?.filter((item) => item[1] <= width).map((item) => item[0]);
};

const getState = (breakpoints: Breakpoints, width: number) => ({
  width,
  currentBreakpoints: getCurrentBreakpoints(breakpoints, width),
});

const useResize = (breakpoints: Breakpoints) => {
  const [state, setState] = useState(() => getState(breakpoints, global.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setState(getState(breakpoints, window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints]);

  return state;
};

export default useResize;
