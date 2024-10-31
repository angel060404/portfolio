import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
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

  return (
    <Navbar expand="lg" className="customNavbar" fixed="top">
      <Container className="navbarContainer">
        <div className="navbarLeft">
          <span className="navbarBrand">
            <img src="/angel-logo.png" alt="Ángel Sánchez Logo" />
          </span>
          <span className="navbarLocation">Madrid, Spain</span>
          <span className="navbarTime">— {formatTime(currentTime)}</span>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbarCenter">
            <Nav.Link href="#skills" className="navbarLink">
              SKILLS
            </Nav.Link>
            <Nav.Link href="#projects" className="navbarLink">
              PROJECTS
            </Nav.Link>
          </Nav>

          <Nav className="navbarRight">
            <Nav.Link
              href="/CV/CV-Ángel-Sánchez-Prieto.pdf"
              download
              className="navbarLink"
            >
              CV
            </Nav.Link>
            <Nav.Link
              href="mailto:angelsanchezprieto04@gmail.com"
              className="navbarLink"
            >
              CONTACT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
