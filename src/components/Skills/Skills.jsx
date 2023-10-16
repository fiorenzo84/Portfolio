import "./skills.scss";
import SkillsTabs from "../SkillsTabs/SkillsTabs";
import QuoteCarousel from "../QuoteCarousel/QuoteCarousel";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <SkillsTabs />
        <div className="quote-carousel-container">
                <QuoteCarousel />
            </div>
      </div>
    </section>
  );
}