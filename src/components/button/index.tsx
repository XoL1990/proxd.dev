import { ReactNode } from "react";
import getClassNames from "utils/getClassNames";
import "./button.scss";

export enum ButtonType {
  white,
  green,
  purple,
  black,
}

export enum ButtonTextType {
  default,
  orange,
  purple,
  green,
}

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  text?: string;
  textType?: ButtonTextType;
  type?: ButtonType;
}

const Button = ({
  children,
  className,
  onClick,
  text,
  textType = ButtonTextType.default,
  type = ButtonType.white,
}: Props) => (
  <button
    onClick={onClick}
    className={getClassNames(
      "button",
      {
        textType: `text-${ButtonTextType[textType]}`,
        type: ButtonType[type],
        "has-children": !!children,
      },
      className,
    )}
    type="button"
  >
    {text}
    {children}
  </button>
);

export default Button;
