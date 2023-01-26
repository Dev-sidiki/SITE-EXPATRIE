import React, { useState } from "react";
import { redirect } from "react-router-dom";

import "../../Styles/inscription.css";
import defaultImage from "../../Assets/images/image_vide.jpg";
import community from "../../Assets/images/community.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import MenuHorizontal from "../menus/MenuHorizontal";

const Inscription = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenAgain, setIsHiddenAgain] = useState(true);
  const handleClick = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <MenuHorizontal />
      <div className="registerWrapper">
        <div className="registerLeft">
          <span className="registerDesc">
            <strong> INSCRIPTION: </strong>
            Créez un compte gratuitement et rejoignez notre communauté de
            soutien aux expatriés !
          </span>

          <img src={community} alt="img-user" className="community-image" />
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <div className="signup-profile-pic__container">
              <img
                src={defaultImage}
                alt="img-user"
                className="signup-profile-pic"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                // onChange={validateImg}
              />
            </div>
            <input
              placeholder="Nom"
              required
              className="registerInput"
              type="text"
            />{" "}
            <input
              placeholder="Prenom"
              required
              className="registerInput"
              type="text"
            />{" "}
            <input
              placeholder="e-mail"
              required
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Ville"
              required
              className="registerInput"
              type="text"
            />
            <input
              placeholder="Profession"
              required
              className="registerInput"
              type="text"
            />
            <select name="statut" id="statut" className="registerInput">
              <option value="" disabled selected hidden>
                Statut
              </option>
              <option value="Expatrié">Expatrié</option>
              <option value="Bénévole">Bénévole</option>
            </select>
            <input
              placeholder="Mot de passe"
              required
              className="registerInput"
              type={isHidden ? "password" : "text"}
              minLength="6"
            />
            {isHidden ? (
              <span
                className="visibility"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="visibility"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityOffIcon />
              </span>
            )}
            <input
              placeholder="Ressaisir le mot de passe"
              required
              className="registerInput"
              type={isHiddenAgain ? "password" : "text"}
            />
            {isHiddenAgain ? (
              <span
                className="visibility-2"
                onClick={() => {
                  setIsHiddenAgain(!isHiddenAgain);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="visibility-2"
                onClick={() => {
                  setIsHiddenAgain(!isHiddenAgain);
                }}
              >
                <VisibilityOffIcon />
              </span>
            )}
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>
                  J'accepte les{" "}
                  <span
                    // to="/condition-general-utilisation"
                    className="cgu-style"
                  >
                    conditions générales d'utilisation
                  </span>
                </label>
                <br />
              </div>
            </div>
            <br />
            <button className="registerButton" type="submit">
              <PersonAddIcon /> S'inscrire
            </button>
            <button className="loginButton">
              {" "}
              <LoginIcon /> Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
