import "./projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
    // Exemple de données de projet
    const projects = [
      {
        title: 'Kasa',
        description: 'La mission était de développer une nouvelle plateforme web pour Kasa, un leader de la location d\'appartements entre particuliers en France.',
        technologies: ['React', 'Sass', 'Node.js'],
        githubLink: 'https://github.com/fiorenzo84/Kasa-ProjectV2',
        demoLink: 'https://kasa-inky-three.vercel.app/',
        image: 'src/assets/images/mockupKasa.png',
      },
      {
        title: 'Ohmyfood',
        description: 'Dans le cadre de ce projet, j\'ai conçu un site "mobile first" qui met en lumière les menus de quatre restaurants triés sur le volet',
        technologies: ['Html', 'Sass'],
        githubLink: 'https://github.com/fiorenzo84/Projet-Ohmyfood',
        demoLink: 'https://fiorenzo84.github.io/Projet-Ohmyfood/index.html',
        image: 'src/assets/images/mockOhmyfood.png',
      },
      // 2 AUTRES PROJETS ICI 
    ];
  
    return (
      <section id="projects">
        <h2>Les projets</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }


  /// RAJOUTER LES PROJETS A AFFICHER 

  /// CREER LES MOCKUP DES IMAGES PROJET