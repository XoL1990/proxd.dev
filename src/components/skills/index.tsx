import Skill from "components/skill";
import { skills } from "config";
import React from "react";
import { useRecoilValue } from "recoil";
import filtersAtom from "state/atoms/filtersAtom";
import getClassNames from "utils/getClassNames";
import "./skills.scss";

const Skills = React.memo(() => {
  const filters = useRecoilValue(filtersAtom);

  return (
    <div className="skills">
      <div className="skills__title">Skills</div>

      <div className="skills__content">
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
        <Skill
          className={getClassNames("skills__clear-button", {
            visible: filters.length > 0,
          })}
          name="Clear"
        />
      </div>
    </div>
  );
});

export default Skills;
