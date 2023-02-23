import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import "../../Styles/changePassMenu.css";

// le composant qui contient le menu de la page de modification du mot de passe
const ChangePassMenu = () => {
  return (
    <>
      <Navbar fixed="top" expand="true" className="menuChange-container">
        {/* le 1er conteneur qui contient le logo*/}
        <Container fluid>
          <Nav>
            <Row>
              <Link to="/">
                <div className="logo-menuChangePassword">
                  <HomeIcon fontSize="large" />
                  Guid<span>Expat</span>
                </div>
              </Link>
            </Row>
          </Nav>
        </Container>

        {/* le deuxieme conteneur qui contient le titre de la page */}
        <Navbar variant="dark" className="contenu-navbar ">
          <Container style={{ justifyContent: "center" }}>
            <Nav>
              <Row>
                <Col>
                  {" "}
                  <div className="title-navbar">
                    <AutorenewIcon fontSize="large" /> MODIFICATION MOT DE PASSE
                  </div>
                </Col>
              </Row>
            </Nav>
          </Container>
        </Navbar>
      </Navbar>
    </>
  );
};

export default ChangePassMenu;
