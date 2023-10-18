import PropTypes from "prop-types";

export function SkillCategory({category}) {
  return (
    <div className="container-title-logo">
      <h3>{category.category}</h3>
      <ul>
        {category.skills.map((skill, skillIndex) => (
          <li key={skillIndex}>
            {skill.logo}
            {/* {skill.name} */}
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
