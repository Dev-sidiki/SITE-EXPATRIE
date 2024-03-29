import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../../Styles/css/aboutMenu.css";

const AproposMenu = () => {
  return (
    <Navbar bg="" expand="lg" className=" topbarContainerAbout">
      <Container>
        {" "}
        <div>
          {" "}
          <span className="logo-about">
            Viv<span>Exp@t</span>
          </span>
          <h4 style={{ color: "black" }}>À propos</h4>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mobile-menu-icon-about"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="navbarItemAbout">
          <Nav className="me-auto ">
            <Link to="/a-propos" className="list-item-apropos">
              Principe
            </Link>
            <Link to="/abonnement" className="list-item-apropos">
              Abonnement
            </Link>
            <Link to="/securite" className="list-item-apropos">
              Sécurité
            </Link>

            <Link to="/service" className="list-item-apropos ">
              Service
            </Link>
          </Nav>
          <br />
          <Link to="/inscription" className="topbarInscriptionAbout">
            <span>
              <PersonAddIcon /> S'inscrire gratuitement
            </span>
          </Link>
          <br />
          <br />
          <Link to="/" className="topbarInscriptionAbout">
            <span>
              <HomeIcon fontSize="large" /> Accueil
            </span>
          </Link>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AproposMenu;
