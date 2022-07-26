import { ReactNode } from "react";
import getClassNames from "utils/getClassNames";
import "./tile.scss";

export enum TileType {
  white,
  green,
  purple,
  orange,
  gray,
  grey,
  light,
}

export enum TileImagePosition {
  inside,
  overflow,
  margin,
  small,
}

interface Props {
  children?: ReactNode;
  className?: string;
  image?: string;
  imagePosition?: TileImagePosition;
  isDotVisible?: boolean;
  type?: TileType;
}

const Tile = ({
  children,
  className,
  image,
  imagePosition = TileImagePosition.inside,
  isDotVisible = false,
  type = TileType.white,
}: Props) => (
  <div
    className={getClassNames(
      "tile",
      {
        dotted: isDotVisible,
        type: TileType[type],
      },
      className,
    )}
  >
    {image && (
      <img
        src={image}
        alt="tile"
        className={getClassNames("tile__image", { type: TileImagePosition[imagePosition] })}
      />
    )}
    {children}
  </div>
);

export default Tile;
