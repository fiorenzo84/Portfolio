import PropTypes from "prop-types";
import {Tooltip} from "react-tooltip";

export function SkillCategory({category}) {
  return (
    <div className="container-title-logo" data-aos="fade-in">
      <h3>{category.category}</h3>
      <ul>
        {category.skills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            data-tooltip-id={`tooltip-${skillIndex}`}
            data-tooltip-content={skill.name}>
            {skill.logo}
            <Tooltip
              id={`tooltip-${skillIndex}`}
              className="my-custom-tooltip"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SkillCategory.propTypes = {
  category: PropTypes.shape({
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        logo: PropTypes.element.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
