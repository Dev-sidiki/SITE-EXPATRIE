import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../../Styles/css/homeMenu.css";

const MenuHorizontal = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
              Exp@t<span>media</span>
            </span>
            <span>
              <h6 className="country">FRANCE</h6>
            </span>
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <Link to="/page-de-connexion" className="topbarIconItem">
              <span>
                <LoginIcon /> Se connecter
              </span>
            </Link>
            <Link to="/page-inscription-client" className="topbarIconItem">
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
              <Link to="/page-de-connexion" className="topbarIconItem">
                <span>
                  <LoginIcon /> Se connecter
                </span>
              </Link>
              <br />
              <Link to="/page-inscription-client" className="topbarIconItem">
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
