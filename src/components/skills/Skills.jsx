import { useContext } from "react";
import { mySkills } from "../../data";
import SkillItem from "./SkillItem";
import "./skills.css";
import ThemeContext from "../../context/index";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className="skills">
      <h3
        style={{
          color: darkMode && "#FFF",
          borderBottomColor: darkMode && "#FFF",
        }}
        className="skills-title"
      >
        مهارت های من
      </h3>
      <div className="skills-wrapper">
        {mySkills.map((skill) => (
          <SkillItem darkMode={darkMode} key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
