import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../../Styles/css/homeMenu.css";

const MenuHorizontal = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/">
            <div className="logo">
              <HomeIcon fontSize="large" />
              Viv<span>Exp@t</span>
            </div>
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <Link to="/connexion" className="topbarIconItem">
              <span>
                <LoginIcon /> Se connecter
              </span>
            </Link>
            <Link to="/inscription" className="topbarIconItem">
              <span>
                <PersonAddIcon /> S'inscrire
              </span>
            </Link>
          </div>
        </div>
        <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
          <span>Menu </span>
          {show ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          fullscreen="md-down"
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <span>MENU</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="color"
            style={{ backgroundColor: "  rgb(94, 94, 97)" }}
          >
            <div className="topbarIcons">
              <Link to="/connexion" className="topbarIconItem">
                <span>
                  <LoginIcon /> Se connecter
                </span>
              </Link>
              <br />
              <Link to="/inscription" className="topbarIconItem">
                <span>
                  <PersonAddIcon /> S'inscrire
                </span>
              </Link>
              <br />
              <Link to="/" className="topbarIconItem">
                <span>
                  <HomeIcon fontSize="large" /> Acceuil
                </span>
              </Link>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default MenuHorizontal;
