import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const CreerEvenement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        Créer un évènement
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Créer un évènement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Donnez un titre à  votre évènement"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type d'évènement</Form.Label>
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
                placeholder="indiquez une adresse ou précisez ci-distanciel"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date et Heure</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Durée de l'évènement</Form.Label>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="moins de 3h"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="exactement 3h"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="plus de 3h"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="description">
              <Form.Control
                as="textarea"
                placeholder="detail sur l'évènement"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choisir une photo de couverture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" size="lg" type="submit">
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreerEvenement;
