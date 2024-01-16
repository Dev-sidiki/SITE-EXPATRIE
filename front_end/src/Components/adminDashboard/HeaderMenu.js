import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const HeaderMenu = () => {
  return (
    <div>
      <br />
      <Row>
        <Col>
          <Nav
            justify
            variant="pills"
            defaultActiveKey="link-1"
            style={{ color: "black" }}
          >
            <Nav.Item>
              <Nav.Link eventKey="link-1"> non signalé</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2"> signalé</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default HeaderMenu;
