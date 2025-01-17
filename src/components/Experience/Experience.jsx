import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Experience.css";
import SkillCarousel from "../SkillCarousel/SkillCarousel";
import { motion } from "framer-motion";

const Experience = ({ language }) => {
  const isEnglish = language === "en";

  const skills = [
    ["./logos/js.png", "JavaScript"],
    ["./logos/html.png", "HTML"],
    ["./logos/css.svg", "CSS"],
    ["./logos/react.png", "React"],
    ["./logos/bootstrap.svg", "Bootstrap"],
    ["./logos/nodejs.svg", "NodeJS"],
    ["./logos/mongodb.svg", "MongoDB"],
    ["./logos/postman.svg", "Postman"],
    ["./logos/git.svg", "GitHub & Bash"],
    ["./logos/express.svg", "Express"],
    ["./logos/PHP-logo.svg.png", "PHP"],
    ["./logos/Laravel.svg.png", "Laravel"],
    ["./logos/mysql-ar21.svg", "MySQL"],
    ["./logos/mysql-ar21.svg", "MySQL"],
  ];

  const projects = [
    // {
    //   title: isEnglish ? "Meep Game" : "Juego Meep",
    //   description: isEnglish
    //     ? "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    //     : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    //   image: [""],
    //   link: "#",
    // },
    {
      title: isEnglish ? "MeetMetters" : "MeetMetters",
      description: isEnglish
        ? "MeetMetters is a web platform that connects people worldwide to explore the Met Museum together. It also features a gallery section where users can browse and discover their favorite artworks and artists."
        : "MeetMetters es una plataforma web que conecta a personas de todo el mundo para explorar juntos el Museo Met. También incluye una sección de galería donde los usuarios pueden descubrir sus obras y artistas favoritos.",
      image: [
        "/projects/meetmetters/met1.png",
        "/projects/meetmetters/met2.png",
        "/projects/meetmetters/met3.png",
      ],
      link: "https://meetmeterss.fly.dev/",
    },
    {
      title: "IRONJOB$",
      description: isEnglish
        ? "IronJobs is a job portal designed to connect companies looking for talent with people looking for new job opportunities. It offers an intuitive interface and efficient functionality to facilitate the recruitment and job search process."
        : "IronJobs es un portal de empleo diseñado para conectar empresas que buscan talento con personas que buscan nuevas oportunidades laborales. Ofrece una interfaz intuitiva y funcionalidad eficiente para facilitar el proceso de reclutamiento y búsqueda de empleo.",
      image: [
        "/projects/ironjobs/ironjobs1.png",
        "/projects/ironjobs/ironjobs2.png",
      ],
      link: "https://ironjobsproject.netlify.app/",
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeBottomVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Experience">
      <Container>
        <motion.div
          className="Presentation"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <h1>
            {isEnglish
              ? "HI!, I'M ÁNGEL SÁNCHEZ."
              : "¡HOLA!, SOY ÁNGEL SÁNCHEZ."}
          </h1>
          <h2>
            {isEnglish
              ? "FULL STACK WEB DEVELOPER"
              : "DESARROLLADOR WEB FULL STACK"}
          </h2>
        </motion.div>
      </Container>

      <div className="Aboutme">
        <Container>
          <motion.div
            className="aligncenter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInVariant}
          >
            <h3>{isEnglish ? "ABOUT ME" : "SOBRE MÍ"}</h3>
            <div className="barrita" />
            <h4>{isEnglish ? "WHO AM I?" : "¿QUIÉN SOY?"}</h4>
          </motion.div>

          <motion.div
            className="whoiam"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeLeftVariant}
            id="skills"
          >
            {/* <div className="profile-container">
              <img src="./profile.jpg" className="profile-img" alt="profile" />
            </div> */}
            <p>
              {isEnglish
                ? "I am Ángel Sánchez Prieto, a passionate web developer with full-stack expertise, specializing in technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJs, PHP, and MySQL. I thrive on solving technical challenges in team settings and enjoy learning new techniques to enhance my projects.I have actively participated in workshops and extracurricular activities, which have expanded my technical skills and strengthened my professional network. My experience includes projects like Ironjobs and MeetMeters, where I developed web applications using APIs and custom databases. I am always looking to grow professionally and personally in the field of web development."
                : "Soy Ángel Sánchez Prieto, un apasionado desarrollador web con experiencia full-stack, especializado en tecnologías como HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJs, PHP y MySQL. Me motiva resolver desafíos técnicos colaborando en equipo, y disfruto aprendiendo nuevas técnicas para mejorar mis proyectos. He participado activamente en talleres y actividades extracurriculares que me han permitido ampliar mis habilidades técnicas y fortalecer mi red profesional. Mi experiencia incluye proyectos como Ironjobs y MeetMeters, donde desarrollé aplicaciones web utilizando APIs y bases de datos propias. Siempre busco crecer profesional y personalmente en el campo del desarrollo web"}
            </p>
          </motion.div>

          <motion.div
            className="myskills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeBottomVariant}
          >
            <h5>{isEnglish ? "SKILLS" : "HABILIDADES"}</h5>
            <SkillCarousel skills={skills} />
          </motion.div>
        </Container>
      </div>

      <div className="projects" id="projects">
        <Container>
          <h5>{isEnglish ? "PROJECTS" : "PROYECTOS"}</h5>
          <motion.div
            className="project-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeBottomVariant}
          >
            {/* <Row> */}
            {projects.map((project, index) => (
              <Col key={index} md={6} lg={4} className="project-col">
                <div className="project-card">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Carousel>
                      {project.image.map((imgSrc, imgIndex) => (
                        <Carousel.Item key={imgIndex}>
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${imgSrc})` }}
                          >
                            <div className="project-overlay">
                              <h6>{project.title}</h6>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </a>
                </div>
              </Col>
            ))}
            {/* </Row> */}
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
