import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import PeopleIcon from "@mui/icons-material/People";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";

import UserManagement from "./UserManagement";
import PostManagement from "./PostManagement";
import EventManagement from "./EventManagement";
import JobManagement from "./JobManagement";

import "../../Styles/scss/adminDashboard.scss";

const AdminDashboard = () => {
  const header = ["Utilisateurs", "Publications", "Évènements", "Emplois"];

  return (
    <div className="admin-container">
      <Container>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: header.length }).map((_, index) => (
            <Col key={index}>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Header>{header[index].toUpperCase()}</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Form>
          <Row>
            <Col md={{ span: 4 }}>
              <Form.Control type="text" placeholder="Search" size="lg" />
            </Col>
            <Col>
              <Button type="submit" size="lg">
                Rechercher
              </Button>
            </Col>
          </Row>
        </Form>
        <br />

        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 mt-4"
          fill
        >
          <Tab eventKey="user" title={<PeopleIcon />} disabled></Tab>
          <Tab eventKey="post" title={<SyncAltIcon />} disabled></Tab>
          <Tab eventKey="event" title={<EventIcon />} disabled></Tab>
          <Tab eventKey="contact" title={<WorkIcon />} disabled></Tab>
        </Tabs>

        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 mt-4"
          fill
        >
          <Tab eventKey="user" title="Liste des Utilisateurs">
            <UserManagement />
          </Tab>

          <Tab eventKey="post" title="Liste des Publications">
            <PostManagement />
          </Tab>

          <Tab eventKey="event" title="Liste des Évènements">
            <EventManagement />
          </Tab>

          <Tab eventKey="contact" title="Liste des Emplois">
            <JobManagement />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default AdminDashboard;
