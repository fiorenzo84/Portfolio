import "./projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import {projects} from "./ProjectData";

export default function Projects() {
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
