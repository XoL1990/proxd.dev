import Technology from "enums/technology";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import filtersAtom from "state/atoms/filtersAtom";
import getClassNames from "utils/getClassNames";
import "./skill.scss";

interface Props {
  className?: string;
  name: keyof typeof Technology | "Clear";
}

const Skill = ({ className, name }: Props) => {
  const [filters, setFilters] = useRecoilState(filtersAtom);

  const isClear = name === "Clear";

  const technology = isClear ? -1 : Technology[name];
  const isActive = useMemo(() => filters.includes(technology), [filters]);

  const handleClick = () => {
    if (isClear) {
      setFilters([]);
      return;
    }
    if (isActive) {
      setFilters(filters.filter((filter) => filter !== technology));
    } else {
      setFilters([...filters, technology]);
    }
  };

  return (
    <div
      className={getClassNames(
        "skill",
        {
          active: isActive,
          clear: isClear,
        },
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {name}
      {!isClear && <div className="skill__x" />}
    </div>
  );
};

export default Skill;
