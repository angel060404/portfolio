import { useEffect, useRef } from "react";
import "./SkillCarousel.css";

// eslint-disable-next-line react/prop-types
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
        console.log(scrollAmount);
        carousel.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(moveCarousel, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-content">
        {skills.map((e, index) => (
          <div key={index} className="skill-item">
            <img src={e[0]} className="skill-icon" alt={e[1]} />
            <p>{e[1]}</p>
          </div>
        ))}

        {skills.map((e, index) => (
          <div key={`duplicate-${index}`} className="skill-item">
            <img src={e[0]} className="skill-icon" alt={e[1]} />
            <p>{e[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
