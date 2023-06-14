import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img from "../../Assets/images/assistance.png";

import "../../Styles/scss/listEvement.scss";

const ListEvenement = () => {
  const [isMine, setIsMine] = useState(true);
  function MesEvement() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <div className="mb-2">
              <Button variant="secondary" size="lg">
                Créer un évènement
              </Button>
            </div>
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
          <Col xs={6} md={3}>
            <div className="mb-2">
              <Button variant="secondary" size="lg">
                Créer un évènement
              </Button>
            </div>
          </Col>
        </Row>
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
