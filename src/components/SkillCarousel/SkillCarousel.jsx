import { useEffect, useRef } from "react";
import "./SkillCarousel.css";

const SkillCarousel = ({ skills }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const moveCarousel = () => {
      if (carousel) {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(moveCarousel, 15); // Un poco más lento para que sea fácil hacer clic
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-content">
        {skills.map((skill, index) => (
          <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-item">
            <img src={skill.img} className="skill-icon" alt={skill.name} />
            <p className="skill-name">{skill.name}</p>
            <span className="skill-tooltip">{skill.desc}</span>
          </a>
        ))}
        {/* Duplicado para el efecto de scroll infinito */}
        {skills.map((skill, index) => (
          <a key={`duplicate-${index}`} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-item">
            <img src={skill.img} className="skill-icon" alt={skill.name} />
            <p className="skill-name">{skill.name}</p>
            <span className="skill-tooltip">{skill.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;