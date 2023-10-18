import PropTypes from "prop-types";

export function SkillBubble({skill}) {
  return <div className="skill-bubble" data-aos="fade-up">{skill}</div>;
}

SkillBubble.propTypes = {
  skill: PropTypes.string.isRequired,
};
