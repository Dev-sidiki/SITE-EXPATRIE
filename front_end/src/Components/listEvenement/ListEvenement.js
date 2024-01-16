import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CreerEvenement from "../creerEvenement/CreerEvenement";
import ChosenEvent from "../chosenEvent/ChosenEvent";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import img from "../../Assets/images/assistance.png";

import "../../Styles/scss/listEvement.scss";

const ListEvenement = () => {
  const [isMine, setIsMine] = useState(true);

  function MesEvement() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <CreerEvenement />
          </Col>
          <Col md={{ span: 3, offset: 4 }}>
            <ChosenEvent />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Nav justify variant="pills" defaultActiveKey="/evenement">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Mes évènements</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Autres évènements</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <br />
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Nom organisateur"
                className="me-2"
              />
            </Col>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Titre évènement"
                className="me-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Recherche</Button>
            </Col>
          </Row>
        </Form>
        <br />
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  function AutreEvement() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <CreerEvenement />
          </Col>
          <Col md={{ span: 3, offset: 4 }}>
            <ChosenEvent />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Nav justify variant="pills" defaultActiveKey="/evenement">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Mes évènements</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Autres évènements</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <br />
        <Form className="d-flex">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Recherche par titre"
                className="me-2"
              />
            </Col>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Recherche par titre"
                className="me-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Recherche</Button>
            </Col>
          </Row>
        </Form>
        <br />
        <CardGroup style={{ gap: "10px" }}>
          <Row>
            <Col sm={4}>
              {" "}
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
              </Card>
            </Col>
            <Col sm={8}>
              {" "}
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ textAlign: "center" }}>
                <Button variant="secondary">VOIR PLUS</Button>
              </Card.Footer>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              {" "}
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
              </Card>
            </Col>
            <Col sm={8}>
              {" "}
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ textAlign: "center" }}>
                <Button variant="secondary">VOIR PLUS</Button>
              </Card.Footer>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              {" "}
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
              </Card>
            </Col>
            <Col sm={8}>
              {" "}
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ textAlign: "center" }}>
                <Button variant="secondary">VOIR PLUS</Button>
              </Card.Footer>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    );
  }

  return (
    <div className="liste-evenement">
      {isMine ? <MesEvement /> : <AutreEvement />}
    </div>
  );
};

export default ListEvenement;
