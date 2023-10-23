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
      {logo: <SiHtml5 />, name: "Html 5", description: "Html 5"},
      {logo: <SiCss3 />, name: "Css 3", description: "Css 3"},
      {logo: <SiJavascript />, name: "JavaScript", description: "JavaScript"},
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {logo: <SiReact />, name: "React.Js", description: "React Js"},
      {logo: <SiSass />, name: "Sass", description: "Préprocesseur Sass"},
      {logo: <SiBootstrap />, name: "Bootstrap", description: "Bootstrap"},
    ],
  },
  {
    category: "Environnement de travail",
    skills: [
      {
        logo: <SiVisualstudiocode />,
        name: "Visual Studio Code",
        description: "Visual Studio Code",
      },
      {logo: <SiNodedotjs />, name: "Node.js", description: "Node js"},
      {logo: <SiNpm />, name: "Npm", description: "Npm"},
      {logo: <SiYarn />, name: "Yarn", description: "Yarn"},
    ],
  },
  {
    category: "Versionning",
    skills: [
      {logo: <SiGit />, name: "Git", description: "Git"},
      {logo: <SiGithub />, name: "GitHub", description: "GitHub"},
    ],
  },
  {
    category: "Design",
    skills: [
      {logo: <SiCanva />, name: "Canva", description: "Canva"},
      {logo: <SiFigma />, name: "Figma", description: "Figma"},
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
