import useResize from "hooks/useResize";
import {
  Children,
  isValidElement,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import getClassNames from "utils/getClassNames";
import isDefined from "utils/isDefined";

import "./masonry.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const Masonry = ({ className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const refElements = useRef<HTMLDivElement[]>([]);
  const [layout, setLayout] = useState<ReactNode[][] | null>(null);

  const breakpoints = { mobile: 699, tablet: 768, desktop: 1366, desktophd: 1920 };
  const { currentBreakpoints, width } = useResize(breakpoints);

  let columnsCount = 1;
  if (currentBreakpoints) {
    if (currentBreakpoints.includes("desktop")) {
      columnsCount = 3;
    } else if (currentBreakpoints.includes("tablet")) {
      columnsCount = 2;
    }
  }

  const elements = useMemo(() => {
    setLayout(null);
    return Children.toArray(children)
      .map((el) => (isValidElement(el) ? el : undefined))
      .filter(isDefined);
  }, [children, width]);

  useLayoutEffect(() => {
    if (layout !== null || !ref.current) return undefined;

    const images = Array.from(ref.current.querySelectorAll("img"));

    const interval = setInterval(() => {
      const isAllCompleted = images.every((image) => image.complete && image.naturalHeight !== 0);

      if (isAllCompleted) {
        clearInterval(interval);
        const newLayout = Array.from({ length: columnsCount }, () => [] as ReactNode[]);
        const columnHeights = newLayout.map(() => 0);
        const heights = refElements.current.map(
          (element) => element.getBoundingClientRect().height,
        );
        elements.forEach((element, index) => {
          const height = heights[index];
          const columnIndex = columnHeights.findIndex(
            (item) => item === Math.min(...columnHeights),
          );
          columnHeights[columnIndex] += height;
          newLayout[columnIndex].push(element);
        });
        setLayout(newLayout);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [ref.current, refElements, layout]);

  const temporaryElements = [] as HTMLDivElement[];

  const addElement = () => (element: HTMLDivElement | null) => {
    if (element !== null) {
      temporaryElements.push(element);
      refElements.current = temporaryElements;
    }
  };

  return (
    <div
      className={getClassNames(
        "masonry",
        {
          loading: layout === null,
        },
        className,
      )}
    >
      {layout === null ? (
        <>
          <div className="masonry__column" ref={ref}>
            {elements.map((element, index) => (
              <div key={index} ref={addElement()}>
                {element}
              </div>
            ))}
          </div>
          <div className="masonry__column" />
          <div className="masonry__column" />
        </>
      ) : (
        layout.map((column, columnIndex) => (
          <div key={columnIndex} className="masonry__column">
            {column.map((element, elementIndex) => (
              <div key={elementIndex} className="masonry__element">
                {element}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Masonry;
