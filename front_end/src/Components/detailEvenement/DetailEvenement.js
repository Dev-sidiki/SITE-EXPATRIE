import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DescriptionIcon from "@mui/icons-material/Description";

import "../../Styles/scss/detailEmploi.scss";

const DetailEvenement = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="container-detailEmploi">
      <Card>
        <Card.Img
          variant="top"
          src="holder.js/100px180?text=Image cap"
          style={{ height: "20rem" }}
        />
        <Card.Body>
          <Card.Title className="text-center">
            {" "}
            <EventIcon />
            TITRE DE L'ÉVÈNEMENT :
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <CalendarMonthIcon /> Date :
            </ListGroup.Item>
            <ListGroup.Item>
              <MeetingRoomIcon />
              Lieu ou Lien :
            </ListGroup.Item>
            <ListGroup.Item>
              <GroupsIcon /> Nombre de participant :
            </ListGroup.Item>
            <ListGroup.Item>
              <GroupsIcon /> Nombre d'intéressés :
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <QueryBuilderIcon />
              Durée :
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Body>
          <Button variant="outline-dark">Je participe</Button>{" "}
          <Button variant="outline-primary">je suis intéressé</Button>{" "}
          <Button variant="info">Modifier</Button>{" "}
          <Button variant="danger">Supprimer</Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Title className="text-center ">
            <DescriptionIcon /> Détail sur l'évènement:
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content. <br />
            With supporting text below as a natural lead-in to additional
            content. <br />
            With supporting text below as a natural lead-in to additional
            content. <br />
            With supporting text below as a natural lead-in to additional
            content. <br />
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header className="text-center">
          {" "}
          <Card.Title className="text-center">À PROPOS DES INVITÉS</Card.Title>
        </Card.Header>
        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <Card.Title>PARTICIPANT(S)</Card.Title>
              <Card.Text>25</Card.Text>
              <Button variant="primary">Voir la liste</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <Card.Title>INTÉRESSÉ(S)</Card.Title>
              <Card.Text>36</Card.Text>
              <Button variant="primary">Voir la liste</Button>
            </Card.Body>
          </Card>
        </div>
      </Card>
      <br />
      <Card className="text-center">
        <Card.Header>INTERVENANTS</Card.Header>
        <Card.Body>
          <Card.Title>Photo de profil</Card.Title>
          <br />
          <Card.Text>
            <Container>
              <Row>
                <Image
                  src="holder.js/171x180"
                  roundedCircle
                  style={{ height: "20rem" }}
                />
              </Row>
            </Container>
          </Card.Text>
          <Button variant="primary">Envoyer un message</Button>
        </Card.Body>
      </Card>{" "}
    </div>
  );
};

export default DetailEvenement;
