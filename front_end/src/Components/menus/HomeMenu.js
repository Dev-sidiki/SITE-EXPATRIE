import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../../Styles/homeMenu.css";

const MenuHorizontal = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="topbarContainer">
        <Link to="/">
          <div className="logo">
            Viv<span>Exp@t</span>
          </div>
        </Link>
        <div className="topbarLeft">
          <Link to="/" className="topbarIconItemInfo">
            <span>
              <HomeIcon fontSize="large" />
            </span>
          </Link>
          <Link to="/conseil" className="topbarIconItemInfo">
            <span>Conseil</span>
          </Link>

          <Link to="/communaute" className="topbarIconItemInfo">
            <span>Communautés</span>
          </Link>
          <Link to="/a-propos" className="topbarIconItemInfo">
            <span>À propos</span>
          </Link>
          <span className="topbarIconItemInfo">
            <input
              className="form-search"
              type="search"
              placeholder="Recherche"
              aria-label="Search"
            />{" "}
            <SearchIcon fontSize="medium" style={{ color: "white" }} />
          </span>
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
              <Link to="/inscription" className="topbarIconItem">
                <span>
                  <PersonAddIcon /> S'inscrire
                </span>
              </Link>
            </div>
            <Link to="/" className="topbarIconItemInfo">
              <span>
                <HomeIcon fontSize="large" />
              </span>
            </Link>

            <Link to="/conseil" className="topbarIconItemInfo">
              <span>Conseil</span>
            </Link>

            <Link to="/communaute" className="topbarIconItemInfo">
              <span>Communautés</span>
            </Link>

            <Link to="/a-propos" className="topbarIconItemInfo">
              <span>À propos</span>
            </Link>

            <span className="topbarIconItemInfo">
              <input
                className="form-search"
                type="search"
                placeholder="Recherche"
                aria-label="Search"
              />{" "}
              <SearchIcon fontSize="medium" style={{ color: "black" }} />
            </span>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default MenuHorizontal;
