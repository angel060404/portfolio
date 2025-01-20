import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import "./Navigation.css";

// eslint-disable-next-line react/prop-types
const Navigation = ({ language, setLanguage }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const translations = {
    en: {
      skills: "SKILLS",
      projects: "PROJECTS",
      cv: "CV",
      contact: "CONTACT ME",
      location: "Madrid, Spain",
    },
    es: {
      skills: "HABILIDADES",
      projects: "PROYECTOS",
      cv: "CV",
      contact: "CONTÁCTAME",
      location: "Madrid, España",
    },
  };

  return (
    <Navbar expand="lg" className="customNavbar" fixed="top">
      <Container className="navbarContainer">
        <div className="navbarLeft">
          <span className="navbarBrand">
            <img src="./logos/A.png" alt="Ángel Sánchez Logo" />
          </span>
          <span className="navbarLocation">
            {translations[language].location}
          </span>
          <span className="navbarTime">— {formatTime(currentTime)}</span>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbarCenter">
            <Nav.Link href="#skills" className="navbarLink">
              {translations[language].skills}
            </Nav.Link>
            <Nav.Link href="#projects" className="navbarLink">
              {translations[language].projects}
            </Nav.Link>
          </Nav>

          <Nav className="navbarRight">
            <Nav.Link
              href={
                language === "es"
                  ? "/CV/CV-Ángel-Sánchez-Prieto.pdf"
                  : "/CV/CV-Ángel-Sánchez-Prieto-en.pdf"
              }
              download
              className="navbarLink"
            >
              CV
            </Nav.Link>
            <Nav.Link
              href="mailto:angelsanchezprieto04@gmail.com"
              className="navbarLink"
            >
              {translations[language].contact}
            </Nav.Link>

            {/* Selector de idioma */}
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="languageDropdown"
                id="language-selector"
              >
                {language === "en" ? (
                  <img
                    src="./flags/uk.png"
                    alt="English"
                    className="language-flag"
                  />
                ) : (
                  <img
                    src="/flags/spain.png"
                    alt="Español"
                    className="language-flag"
                  />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="flagBackground">
                <Dropdown.Item onClick={() => setLanguage("en")}>
                  <img
                    src="./flags/uk.png"
                    alt="English"
                    className="language-flag"
                  />{" "}
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage("es")}>
                  <img
                    src="./flags/spain.png"
                    alt="Español"
                    className="language-flag"
                  />{" "}
                  Español
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
