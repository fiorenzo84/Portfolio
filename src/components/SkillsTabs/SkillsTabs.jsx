import "./skillstabs.scss";

import {useState} from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVisualstudiocode,
  SiNodedotjs,
  SiNpm,
  SiYarn,
  SiReact,
  SiSass,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiCanva,
  SiFigma,
} from "react-icons/si";

export default function SkillsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const logoSkills = [
    {
      category: "Langages",
      skills: [
        {logo: <SiHtml5 />},
        {logo: <SiCss3 />},
        {logo: <SiJavascript />},
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {logo: <SiReact />},
        {logo: <SiSass />},
        {logo: <SiBootstrap />},
      ],
    },
    {
      category: "Environnement de travail",
      skills: [
        {logo: <SiVisualstudiocode />},
        {logo: <SiNodedotjs />},
        {logo: <SiNpm />},
        {logo: <SiYarn />},
      ],
    },
    {
      category: "Versionning",
      skills: [{logo: <SiGit />}, {logo: <SiGithub />}],
    },
    {
      category: "Design",
      skills: [{logo: <SiCanva />}, {logo: <SiFigma />}],
    },
  ];

  const softSkills = (
    <div className="soft-skills">
      {[
        "Autonomie",
        "Rigueur",
        "Curiosité",
        "Aisance Relationnelle",
        "Écoute et Adaptabilité",
        "Travail en Équipe",
        "Apprentissage Continu",
        "Flexibilité",
      ].map((skill, index) => (
        <div key={index} className="skill-bubble">
          {skill}
        </div>
      ))}
    </div>
  );

  const hardSkills = (
    <div>
      {logoSkills.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                {skill.logo} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const tabsData = [{content: softSkills}, {content: hardSkills}];

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
