import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const PublierEmploi = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        Publier un emploi
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Publier un emploi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Secteur d'activité</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selectionnez un type ici... </option>
                <option value="1">évènement sportif</option>
                <option value="2">évènement culturel</option>
                <option value="3">évènement social</option>
                <option value="4">évènement éducatif</option>
                <option value="5">évènement administratif</option>
                <option value="6">autre</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Intitulé du poste</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quel poste publiez-vous ?"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nom de la société</Form.Label>
              <Form.Control
                type="text"
                placeholder="Indiquer de la compagnie ?"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Salaire</Form.Label>
              <Form.Control
                type="text"
                placeholder="Indiquez une marge de salaire"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mode de travail</Form.Label>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Présentiel"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Distanciel "
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="hybride "
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type de contrat</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selectionnez un type ici... </option>
                <option value="1">évènement sportif</option>
                <option value="2">évènement culturel</option>
                <option value="3">évènement social</option>
                <option value="4">évènement éducatif</option>
                <option value="5">évènement administratif</option>
                <option value="6">autre</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="indiquez une ville ou précisez ci-distanciel"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="indiquez l'adresse ou précisez ci-distanciel"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date de publication</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
            <br />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Description du poste"
            >
              <Form.Control
                as="textarea"
                placeholder="detail sur le post"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Profil idéal pour le poste"
            >
              <Form.Control
                as="textarea"
                placeholder="detail sur le post"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Pourquoi choisir votre entreprise ou service ?"
            >
              <Form.Control
                as="textarea"
                placeholder="detail sur le post"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" size="lg" type="submit">
            Publier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PublierEmploi;
