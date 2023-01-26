import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "../../Styles/menuHorizontal.css";

const MenuHorizontal = () => {
  const [show, setShow] = useState(false);

  console.log(show);
  return (
    <nav>
      <div className="topbarContainer">
        <Link to="/">
          <div className="logo">
            Guid<span>Expat</span>
          </div>
        </Link>
        <div
          className={show ? "nav-links-mobile-left" : "topbarLeft"}
          onClick={() => {
            setShow(!show);
          }}
        >
          <Link to="/" className="topbarIconItemInfo">
            <span>
              <HomeIcon fontSize="large" />
            </span>
          </Link>

          {/* <Link to="/communaute" className="topbarIconItemInfo">
            <span>Communautés</span>
          </Link>

          <Link to="/conseil" className="topbarIconItemInfo">
            <span>Conseils</span>
          </Link> */}

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

          {/* <Link to="/temoignage" className="topbarIconItemInfo">
            <span>Témoignages</span>
          </Link> */}
        </div>

        <div className={show ? "nav-links-mobile-right" : "topbarRight"}>
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
      </div>
    </nav>
  );
};

export default MenuHorizontal;
