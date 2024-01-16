import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../../Styles/scss/detailEmploi.scss";

const DetailEmploi = () => {
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
      <Card className="text-center">
        <Card.Body>
          <Card.Title>INTITULÉ DU POSTE</Card.Title>
          <br />
          <Card.Text>
            Nom de l'entreprise - Ville - Type de contrat - Date de publication
            - Salaire
          </Card.Text>
          <br />
          <Button variant="primary">Postuler</Button>{" "}
          <Button variant="secondary">Modifier</Button>{" "}
          <Button variant="info">Signaler</Button>{" "}
          <Button variant="danger">Supprimer</Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header className="text-center strong">
          <Card.Title> Information sur l'offre d'emploi</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>Détail sur le poste</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <br />
          <Card.Title>Quel est le profil idéal ?</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content. <br />
          </Card.Text>
          <br />
          <Card.Title>À propos de nous</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Postuler pour cette offre</Card.Title>
          <Card.Text>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="saisissez votre nom"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Champ obligatoire
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="saisissez votre prénom"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Champ obligatoire
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>E-mail</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Entrer votre addresse e-mail"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Champ obligatoire
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group md="2" controlId="validationCustomUsername">
                  <Form.Label>Inserer votre CV ici</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="file"
                      placeholder="CV"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Champ obligatoire
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group md="2" controlId="validationCustomUsername">
                  <Form.Label>
                    Inserer votre lettre de motivation ici
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="file"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Champ obligatoire
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <br />
              <Button type="submit">Envoyer</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailEmploi;
