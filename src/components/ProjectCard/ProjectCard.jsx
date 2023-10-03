import "./projectcard.scss";
import PropTypes from "prop-types";

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
}) {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    image: PropTypes.string.isRequired,
  };

  return (
    <div className="project-card">
      <img
        src={image}
        alt={`Capture d'écran du projet ${title}`}
        className="project-image"
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-technologies">{technologies.join(", ")}</p>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
