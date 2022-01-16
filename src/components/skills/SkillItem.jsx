import "./skill-item.css";

const SkillItem = ({ skill,darkMode }) => {
  return (
    <div className="skill">
      <div style={{color: darkMode && "rgb(199, 203, 206)"}} className="skill-wrapper">
        <div className="skill-title">{skill.name}</div>
        <div>{skill.percent}</div>
      </div>
      <div className="skill-progress-bar">
        <div style={{ width: skill.percent }} className="skill-progress"></div>
      </div>
    </div>
  );
};

export default SkillItem;
