import "./skillstabs.scss";
import {useState} from "react";
import {logoSkills, softSkillsList} from "./SkillTabsComponents/skillsData";
import {SkillBubble} from "./SkillTabsComponents/SkillBubble";
import {SkillCategory} from "./SkillTabsComponents/SkillCategory";

export default function SkillsTabs() {
  const SOFT = "SOFT";
  const HARD = "HARD";
  const [selectedTab, setSelectedTab] = useState(0);

  const softSkills = (
    <div className="soft-skills">
      {softSkillsList.map((skill, index) => (
        <SkillBubble key={index} skill={skill} />
      ))}
    </div>
  );

  const hardSkills = (
    <div>
      {logoSkills.map((category, index) => (
        <SkillCategory key={index} category={category} />
      ))}
    </div>
  );

  const tabsData = [
    {key: SOFT, content: softSkills},
    {key: HARD, content: hardSkills},
  ];

  return (
    <div className="container-skills-tabs">
      <div className="container-button-skills">
        {tabsData.map((obj, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`button-skills ${
              selectedTab === index ? "selected" : ""
            }`}>
            {index === 0 ? "Soft Skills" : "Hard Skills"}
          </button>
        ))}
      </div>
      <div
        className={`content-skills ${
          selectedTab === 0 ? "soft-selected" : "hard-selected"
        }`}>
        {tabsData[selectedTab].content}
      </div>
    </div>
  );
}
