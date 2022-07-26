import getClassNames from "utils/getClassNames";
import "./year.scss";

interface Props {
  classNames?: string;
}

const Year = ({ classNames }: Props) => (
  <div className={getClassNames("year", {}, classNames)}>2022</div>
);

export default Year;
