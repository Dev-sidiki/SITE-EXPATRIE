// importation des package react
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// importation des icons depuis materiel
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DoneIcon from "@mui/icons-material/Done";
import ChangePassMenu from "../menus/ChangePassMenu";

// importation des images
import pwdImage from "../../Assets/images/pwdOubli.png";

// importation du style
import "../../Styles/passwordChange.css";

// le composant de modification du mot de passe
const PasswordChange = () => {
  // variable pour afficher ou masquer les mots de passe
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenAgain, setIsHiddenAgain] = useState(true);

  // variable pour savoir s'il ya eu un click ou pas
  const [isClicked, setIsClicked] = useState(false);

  // la fonction qui sera exécuté lors de la soumission du formulaire
  const handleClick = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="resetPassword">
      {/* on fait appel au composant du menu */}
      <ChangePassMenu />
      <div className="resetPassword-container">
        {/* la partie gauche  du composant de modification du mot de passe*/}
        <div className="resetPassword-gauche">
          {/* phrase d'accroche */}
          <span className="resetPassword-phrase-accroche">
            Ne vous inquiétez pas , vous avez la possibilité de modifier votre
            mot de passe grâce au code reçu dans votre boîte mail
          </span>
          {/* image */}
          <img src={pwdImage} alt="img-user" className="resetPassword-image" />
        </div>
        {/* la partie droite du composant de modification du mot de passe */}
        <div className="resetPassword-droite">
          <h2 style={{ textAlign: "center" }}>Modification du mot de passe</h2>
          {/* creation du fromualite  */}
          <form className="resetPassword-formulaire" onSubmit={handleClick}>
            {/* création des différents champs */}
            <input
              placeholder="e-mail"
              required
              className="resetPassword-input"
              type="email"
            />
            <input
              placeholder="Codepin"
              required
              className="resetPassword-input"
              type="number"
            />
            <input
              placeholder="nouveau mot de passe"
              required
              className="resetPassword-input"
              type={isHidden ? "password" : "text"}
              minLength="6"
            />
            {/* afficher ou masquer les mots de passe */}
            {isHidden ? (
              <span
                className="resetPassword-visibility"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="resetPassword-visibility"
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
              className="resetPassword-input"
              type={isHiddenAgain ? "password" : "text"}
            />
            {isHiddenAgain ? (
              <span
                className="resetPassword-visibility-2"
                onClick={() => {
                  setIsHiddenAgain(!isHiddenAgain);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="resetPassword-visibility-2"
                onClick={() => {
                  setIsHiddenAgain(!isHiddenAgain);
                }}
              >
                <VisibilityOffIcon />
              </span>
            )}

            <br />
            {/* création du bouton de validation */}
            <button
              className="resetPassword-bouton"
              type="submit"
              onClick={() => {
                setIsClicked(true);
              }}
            >
              <DoneIcon /> Valider
            </button>
            {isClicked && <Navigate to="/connexion" replace={true} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
