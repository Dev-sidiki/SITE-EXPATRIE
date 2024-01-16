// importation des module necessaire
import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

//importation des composant depuis react-boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// importation des icons depuis material ui
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

// importation d'image depuis mon dossier d'image
import loginImage from "../../Assets/images/login.png";

// importation des composant
import HomeMenu from "../menus/HomeMenu";

// imporation du style
import "../../Styles/css/connexion.css";

// le composant du formulaire d'authentification
const Login = () => {
  // les variable pour la connexion
  const email = useRef();
  const password = useRef();

  // variable pour afficher ous masquer le mot de passe
  const [isHidden, setIsHidden] = useState(true);

  const [show, setShow] = useState(false);

  // variable pour savoir s'il ya eu un click ou pas
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fonction qui sera excécuter a la soumission du formulaire
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="connexion">
      {/* on fait appelle le composant menu */}
      <HomeMenu />
      <div className="connexion-container">
        {/*la partie gauche du composant d'authentification  */}
        <div className="connexion-gauche">
          {/* phrase accroche et image */}
          <span className="connexion-phrase-accroche">
            Connectez-vous pour accéder à votre compte
          </span>
          <img
            src={loginImage}
            alt="img-connexion"
            className="connexion-image"
          />
        </div>
        {/* la partie  droite du composant d'authentification */}
        <div className="connexion-droite">
          {/* formulaire de connexion */}
          <form className="connexion-formulaire" onSubmit={handleClick}>
            {/* champ de connexion */}
            <input
              placeholder="e-mail"
              type="email"
              required
              className="connexion-input"
              ref={email}
            />
            <input
              placeholder="Mot de passe"
              type={isHidden ? "password" : "text"}
              required
              minLength="6"
              className="connexion-input"
              ref={password}
            />
            {/* afficher ou masquer le mot de passe*/}
            {isHidden ? (
              <span
                className="visibility-connexion"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="visibility-connexion"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityOffIcon />
              </span>
            )}
            {/* boutton de connexion */}
            <button className="connexion-bouton" type="submit">
              <LoginIcon /> Se connecter
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />disabled={isFetching}
              ) : (
                "Log In"
              )} */}
            </button>

            <span className="password-oubli">
              Avez-vous oublié votre mot de passe{" "}
              <i className="question icon"></i>
            </span>
            {/*Bouton modal en cas d'oubli du mot de passe */}
            <Button
              variant="dark"
              onClick={handleShow}
              className="recup-codepin"
            >
              <div>
                <i className="hand point right icon"></i> Cliquez ici
                {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
              </div>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Recuperation d'un codepin</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Saissiez votre adresse e-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="mail@example.com"
                      autoFocus
                      required
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} type="submit">
                  Annuler
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    handleClose();
                    setIsClicked(true);
                  }}
                >
                  Envoyer
                </Button>
                {/* redirection vers une autre page en cas de clique */}
                {isClicked && (
                  <Navigate
                    to="/changement-mot-de-passe-client"
                    replace={true}
                  />
                )}
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
