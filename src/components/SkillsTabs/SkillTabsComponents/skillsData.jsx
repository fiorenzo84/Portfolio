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

export const logoSkills = [
  {
    category: "Langages",
    skills: [
      {logo: <SiHtml5 />, name: "HTML5"},
      {logo: <SiCss3 />, name: "CSS3"},
      {logo: <SiJavascript />, name: "JavaScript"},
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {logo: <SiReact />, name: "React"},
      {logo: <SiSass />, name: "Sass"},
      {logo: <SiBootstrap />, name: "Bootstrap"},
    ],
  },
  {
    category: "Environnement de travail",
    skills: [
      {logo: <SiVisualstudiocode />, name: "Visual Studio Code"},
      {logo: <SiNodedotjs />, name: "Node.js"},
      {logo: <SiNpm />, name: "NPM"},
      {logo: <SiYarn />, name: "Yarn"},
    ],
  },
  {
    category: "Versionning",
    skills: [
      {logo: <SiGit />, name: "Git"},
      {logo: <SiGithub />, name: "GitHub"},
    ],
  },
  {
    category: "Design",
    skills: [
      {logo: <SiCanva />, name: "Canva"},
      {logo: <SiFigma />, name: "Figma"},
    ],
  },
];

export const softSkillsList = [
  "Autonomie",
  "Rigueur",
  "Curiosité",
  "Aisance Relationnelle",
  "Écoute et Adaptabilité",
  "Travail en Équipe",
  "Apprentissage Continu",
  "Flexibilité",
];
