import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Experience.css";
import SkillCarousel from "../SkillCarousel/SkillCarousel";
import { motion } from "framer-motion";

const Experience = ({ language }) => {
  const isEnglish = language === "en";

  const skills = [
    { img: "./logos/js.png", name: "JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript", desc: isEnglish ? "Dynamic scripting language" : "Lenguaje dinámico" },
    { img: "./logos/html.png", name: "HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML", desc: isEnglish ? "Markup language" : "Lenguaje de marcado web" },
    { img: "./logos/css.svg", name: "CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS", desc: isEnglish ? "Style sheet language" : "Lenguaje de estilos" },
    { img: "./logos/react.png", name: "React", url: "https://react.dev/", desc: isEnglish ? "UI library" : "Librería para interfaces web" },
    { img: "./logos/bootstrap.svg", name: "Bootstrap", url: "https://getbootstrap.com/", desc: isEnglish ? "CSS Framework" : "Framework de CSS" },
    { img: "./logos/nodejs.svg", name: "NodeJS", url: "https://nodejs.org/", desc: isEnglish ? "JavaScript runtime" : "Entorno de ejecución" },
    { img: "./logos/mongodb.svg", name: "MongoDB", url: "https://www.mongodb.com/", desc: isEnglish ? "NoSQL Database" : "Base de datos NoSQL" },
    { img: "./logos/postman.svg", name: "Postman", url: "https://www.postman.com/", desc: isEnglish ? "API platform" : "Plataforma de APIs" },
    { img: "./logos/git.svg", name: "GitHub", url: "https://github.com/", desc: isEnglish ? "Version control" : "Control de versiones" },
    { img: "./logos/express.svg", name: "Express", url: "https://expressjs.com/", desc: isEnglish ? "Node.js framework" : "Framework Node.js" },
    { img: "./logos/PHP-logo.svg.png", name: "PHP", url: "https://www.php.net/", desc: isEnglish ? "Server-side language" : "Backend" },
    { img: "./logos/Laravel.svg.png", name: "Laravel", url: "https://laravel.com/", desc: isEnglish ? "PHP Framework" : "Framework de PHP" },
    { img: "./logos/mysql-ar21.svg", name: "MySQL", url: "https://www.mysql.com/", desc: isEnglish ? "Relational database" : "Base de datos SQL" },
  ];

  const education = [
    {
      title: isEnglish ? "Higher VET in Web App Development (DAW)" : "Grado Superior en Desarrollo Web (DAW)",
      school: "IES Palomeras Vallecas",
      date: "2025 - Presente",
      desc: isEnglish ? "Currently studying the second year." : "Actualmente cursando el segundo año."
    },
    {
      title: isEnglish ? "Web Development Internship" : "Prácticas de Desarrollo Web",
      school: "Grupo Colon-IECM",
      date: "02/2025 - 05/2025",
      desc: isEnglish ? "Professional internship applying full-stack web development skills in real-world projects." : "Prácticas profesionales aplicando conocimientos de desarrollo web full-stack en proyectos reales."
    },
    {
      title: isEnglish ? "Certificate in Web Tech Development" : "Certificado de Profesionalidad Web",
      school: "Grupo Colon-IECM",
      date: "10/2024 - 01/2025",
      desc: isEnglish ? "Practical training in server/client side web programming (MySQL, PHP, C#)." : "Formación práctica en programación web lado cliente y servidor (MySQL, PHP, C#)."
    },
    {
      title: "Web Development Bootcamp",
      school: "Ironhack Madrid",
      date: "09/2023 - 12/2023",
      desc: isEnglish ? "Intensive full-stack web development course." : "Curso intensivo en desarrollo web full-stack."
    }
  ];

  const projects = [
    {
      title: "JavaFX Chess",
      description: isEnglish
        ? "Complete desktop chess application built with Java. Features custom UI menus, strict move validation, match clocks, and game state persistence."
        : "Juego de ajedrez de escritorio desarrollado en Java. Incluye menús personalizados, validación estricta de movimientos, relojes de partida y persistencia.",
      image: [
        "/projects/ajedrez/ajedrez1.png",
        "/projects/ajedrez/ajedrez2.png",
        "/projects/ajedrez/ajedrez3.png",
        "/projects/ajedrez/ajedrez4.png",
        "/projects/ajedrez/ajedrez5.png",
        "/projects/ajedrez/ajedrez6.png",
      ],
      link: "https://github.com/angel060404/Ajedrez_java",
      containImage: true,
    },
    {
      title: "MeetMetters",
      description: isEnglish
        ? "Platform that connects people worldwide to explore the Met Museum. Features a gallery to discover artworks."
        : "Plataforma que conecta personas para explorar el Museo Met. Incluye galería para descubrir obras.",
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
        ? "Job portal designed to connect companies with talent. Intuitive interface for recruitment."
        : "Portal de empleo diseñado para conectar empresas con talento. Interfaz intuitiva de reclutamiento.",
      image: [
        "/projects/ironjobs/ironjobs1.png",
        "/projects/ironjobs/ironjobs2.png",
      ],
      link: "https://ironjobsproject.netlify.app/",
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="Experience">
      <Container>
        <motion.div
          className="hero-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="hero-content">
            <p className="hero-greeting">{isEnglish ? "HELLO, I AM" : "HOLA, SOY"}</p>
            <h1 className="hero-title">
              ÁNGEL <br /> <span className="gradient-text">SÁNCHEZ</span>
            </h1>
            <h2 className="hero-subtitle mb-4">
              {isEnglish ? "FULL STACK WEB DEVELOPER" : "DESARROLLADOR WEB FULL STACK"}
            </h2>

            <div className="hero-buttons d-flex flex-wrap gap-3 mt-4">
              <a href="mailto:angelsanchezprieto04@gmail.com" className="btn-primary-glow">
                {isEnglish ? "CONTACT ME" : "CONTÁCTAME"}
              </a>
              <a href={isEnglish ? "/CV/CV-Ángel-Sánchez-Prieto-en.pdf" : "/CV/CV-Ángel-Sánchez-Prieto.pdf"} download className="btn-glass">
                {isEnglish ? "DOWNLOAD CV" : "DESCARGAR CV"}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>

      <Container className="bento-section" id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <h3 className="section-title">{isEnglish ? "ABOUT ME" : "SOBRE MÍ"}</h3>

          <Row className="g-4">
            <Col lg={8}>
              <div className="glass-panel h-100">
                <h4 className="panel-title">{isEnglish ? "WHO AM I?" : "¿QUIÉN SOY?"}</h4>
                <p className="panel-text">
                  {isEnglish
                    ? "Passionate web developer with full-stack expertise, specializing in modern technologies. I thrive on solving technical challenges in team settings and constantly learning new tools. My experience ranges from crafting single-page applications to building robust custom APIs."
                    : "Apasionado desarrollador web full-stack, especializado en tecnologías modernas. Me motiva resolver desafíos técnicos en equipo y aprender nuevas herramientas constantemente. Mi experiencia abarca desde crear aplicaciones web completas hasta diseñar APIs propias y robustas."}
                </p>
              </div>
            </Col>

            <Col lg={4} className="d-flex flex-column gap-4">
              <div className="glass-panel flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
                <span className="emoji-icon">📍</span>
                <h4 className="panel-title m-0">Madrid, Spain</h4>
              </div>
              <div className="glass-panel flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
                <span className="emoji-icon">💻</span>
                <h4 className="panel-title m-0">{isEnglish ? "DAW Student" : "Estudiante DAW"}</h4>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <div className="glass-panel p-0 overflow-hidden">
                <h4 className="panel-title p-4 pb-0 text-center">{isEnglish ? "TECH STACK" : "TECNOLOGÍAS"}</h4>
                <SkillCarousel skills={skills} />
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <div className="education-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <h3 className="section-title text-center">{isEnglish ? "EDUCATION" : "FORMACIÓN"}</h3>

            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="glass-panel timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <h5 className="timeline-school">{item.school}</h5>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <div className="projects-section" id="projects">
        <Container>
          <h3 className="section-title text-center">{isEnglish ? "SELECTED WORK" : "PROYECTOS DESTACADOS"}</h3>
          <motion.div
            className="row justify-content-center g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInVariant}
          >
            {projects.map((project, index) => (
              <Col key={index} md={6} lg={6} xs={12}>
                <div className="glass-panel project-card p-0">
                  <Carousel indicators={true} controls={true} interval={4000}>
                    {project.image.map((imgSrc, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <div
                          className="project-image"
                          style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: project.containImage ? 'contain' : 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="project-overlay">
                            <h4 className="project-title gradient-text">{project.title}</h4>
                            <p className="project-desc">{project.description}</p>

                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-glass-small mt-3"
                            >
                              {isEnglish ? "VIEW PROJECT" : "VER PROYECTO"}
                            </a>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>
            ))}
          </motion.div>
        </Container>
      </div>

      <footer className="footer-section" id="contact">
        <Container>
          <motion.div
            className="glass-panel text-center p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInVariant}
          >
            <h3 className="section-title mb-3">
              {isEnglish ? "LET'S WORK TOGETHER" : "TRABAJEMOS JUNTOS"}
            </h3>
            <p className="panel-text mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              {isEnglish
                ? "Currently open to new opportunities. If you have a project in mind or just want to say hi, my inbox is always open!"
                : "Actualmente abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres saludar, ¡mi bandeja de entrada está abierta!"}
            </p>
            <div className="social-links d-flex justify-content-center gap-4 mt-4">
              <a href="https://github.com/angel060404" target="_blank" rel="noopener noreferrer" className="social-icon">GITHUB</a>
              <a href="https://www.linkedin.com/in/ángel-sánchez-prieto-33012029a/" target="_blank" rel="noopener noreferrer" className="social-icon">LINKEDIN</a>
            </div>
          </motion.div>
        </Container>
      </footer>
    </div>
  );
};

export default Experience;