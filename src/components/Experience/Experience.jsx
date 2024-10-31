import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Experience.css";
import SkillCarousel from "../SkillCarousel/SkillCarousel";
import { motion } from "framer-motion";

const Experience = () => {
  const skills = [
    ["./js.png", "JavaScript"],
    ["./html.png", "HTML"],
    ["./css.svg", "CSS"],
    ["./react.png", "React"],
    ["./bootstrap.svg", "Bootstrap"],
    ["./nodejs.svg", "NodeJS"],
    ["./mongodb.svg", "MongoDB"],
    ["./postman.svg", "Postman"],
    ["./git.svg", "GitHub & Bash"],
    ["./express.svg", "Express"],
    ["./PHP-logo.svg.png", "PHP"],
    ["./Laravel.svg.png", "Laravel"],
    ["./mysql-ar21.svg", "MySQL"],
  ];

  const projects = [
    {
      title: "Meep Game",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: [""],
      link: "#",
    },
    {
      title: "MeetMetters",
      description: "Meet new people or ",
      image: [""],
      link: "#",
    },
    {
      title: "IRONJOB$",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: [
        "/projects/ironjobs/ironjobs2.png",
        "/projects/ironjobs/ironjobs1.png",
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
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <h1>HI!, I'M ÁNGEL SÁNCHEZ.</h1>
          <h2>FULL STACK WEB DEVELOPER</h2>
        </motion.div>
      </Container>

      <div className="Aboutme">
        <Container>
          <motion.div
            className="aligncenter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariant}
          >
            <h3>ABOUT ME</h3>
            <div className="barrita" />
            <h4>WHO AM I?</h4>
          </motion.div>

          <motion.div
            className="whoiam"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeLeftVariant}
            id="skills"
          >
            <div className="profile-container">
              <img src="./profile.jpg" className="profile-img" alt="profile" />
            </div>
            <p>
              Tech enthusiast transitioning into a role as a Full Stack
              Developer, equipped with a degree in Application Development.
              Recently, I successfully completed a rigorous Full-Stack Web
              Development bootcamp, honing my expertise in JavaScript, HTML5,
              CSS, NodeJS, Express, MongoDB, and React. Alongside my strong
              foundation in front-end technologies, I bring substantial backend
              knowledge, enabling me to approach projects holistically.
            </p>
          </motion.div>

          <motion.div
            className="myskills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeBottomVariant}
          >
            <h5>SKILLS</h5>
            <SkillCarousel skills={skills} />
          </motion.div>
        </Container>
      </div>

      <div className="projects" id="projects">
        <Container>
          <h5>PROJECTS</h5>
          <motion.div
            className="project-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeBottomVariant}
          >
            <Row>
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
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
