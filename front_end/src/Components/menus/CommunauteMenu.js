import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";

import "../../Styles/css/communauteMenu.css";

const CommunauteMenu = () => {
  return (
    <div>
      <Navbar bg="" expand="lg" className=" topbarContainerCommunaute">
        <Container className="flex-direction">
          <Navbar.Brand>
            {" "}
            <div>
              {" "}
              <span className="logo-communaute">
                Viv<span>Exp@t</span>
              </span>
              <h4 style={{ color: "black" }}>
                {" "}
                <ForumIcon fontSize="large" />
                Discussion
              </h4>{" "}
            </div>
          </Navbar.Brand>
          <Link to="/" className="list-item-communaute">
            <HomeIcon fontSize="large" /> Accueil
          </Link>
          <Nav className="nav-container">
            <span className="topbarIconSearchForm">
              <input
                className="form-search-communaute"
                type="search"
                placeholder="Recherche"
                aria-label="Search"
              />
              <SearchIcon fontSize="medium" style={{ color: "white" }} />
            </span>{" "}
          </Nav>
          <Link to="/connexion">
            <span className="topbarConnexionCommunication">
              <LoginIcon /> Se connecter
            </span>
          </Link>{" "}
        </Container>
      </Navbar>
    </div>
  );
};

export default CommunauteMenu;
