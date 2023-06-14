import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import "../../Styles/css/changePassMenu.css";

// le composant qui contient le menu de la page de modification du mot de passe
const ChangePassMenu = () => {
  return (
    <Container>
      <Navbar fixed="top" expand="true" className="contenu-navbar-1">
        {/* le 1er conteneur qui contient le logo*/}

        <Nav>
          <Row>
            <Link to="/">
              <div className="logo-menuChangePassword">
                <HomeIcon fontSize="large" />
                Viv<span>Exp@t</span>
              </div>
            </Link>
          </Row>
        </Nav>

        {/* le deuxieme conteneur qui contient le titre de la page */}
        <div className="contenu-navbar-2 ">
          <Container>
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
        </div>
      </Navbar>
    </Container>
  );
};

export default ChangePassMenu;
