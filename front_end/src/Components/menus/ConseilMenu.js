import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

import "../../Styles/conseilMenu.css";

const MenuConseil = () => {
  return (
    <>
      <Navbar fixed="top" expand="true" className="conseil-container">
        <Container fluid>
          <Nav className="me-auto">
            <Row>
              <Link to="/">
                <div className="logo-conseil ">
                  <HomeIcon fontSize="large" />
                  Viv<span>Exp@t</span>
                </div>
              </Link>
            </Row>
          </Nav>
        </Container>

        <Navbar variant="dark" className="menu-container ">
          <Container style={{ justifyContent: "center" }}>
            <Nav>
              <Row className="container-left">
                <Col>
                  {" "}
                  <Nav.Link href="#haut" className="item-1">
                    <ImportContactsIcon fontSize="large" /> Conseils
                  </Nav.Link>
                </Col>
              </Row>
              <Row className="container-center">
                <Col>
                  <Nav.Link href="#milieu" className="item-2">
                    <AutoFixHighIcon fontSize="large" /> Précautions
                  </Nav.Link>
                </Col>
              </Row>
              <Row className="container-right">
                <Col>
                  {" "}
                  <Nav.Link href="#bas" className="item-2">
                    <EmergencyShareIcon fontSize="large" /> Urgence?
                  </Nav.Link>
                </Col>
              </Row>
            </Nav>
          </Container>
        </Navbar>
      </Navbar>
    </>
  );
};

export default MenuConseil;
