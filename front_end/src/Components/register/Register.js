// importation des package react
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// importation des icons depuis materiel
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeMenu from "../menus/HomeMenu";

// importation des images
import defaultImage from "../../Assets/images/image_vide.jpg";
import community from "../../Assets/images/community.png";

// importation du style
import "../../Styles/css/inscription.css";

//le composant du formulaire d'inscription
const Register = () => {
  // les variables pour changer le types des icons de visualisation du mot de passe
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenAgain, setIsHiddenAgain] = useState(true);

  // variable pour savoir s'il ya eu un click ou pas
  const [isClicked, setIsClicked] = useState(false);

  // la fonction qui sera exécuté lors de la soumission du formulaire
  const handleClick = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="inscription">
      {/* on fait appel au composant du menu */}
      <HomeMenu />
      <div className="inscription-container">
        {/* la partie gauche  du composant d'inscription*/}
        <div className="inscription-gauche">
          {/* phrase d'accroche */}
          <span className="phrase-accroche-inscription">
            Inscrivez-vous gratuitement sur notre site, pour rejoindre notre
            communauté et découvrir tout ce que nous avons à offrir !
          </span>
          {/* image */}
          <img src={community} alt="img-user" className="communaute-image" />
        </div>
        {/* la partie droite du composant d'inscription */}
        <div className="inscription-droite">
          {/* creation du fromualite  */}
          <form className="formulaire-inscription" onSubmit={handleClick}>
            {/* creation d'un avatar */}
            <div className="avatar-container">
              <img src={defaultImage} alt="img-user" className="img-avatar" />
              {/* on creer un champ input caché de type fichier que on va connecter a son label */}
              {/* grâce a htmlFor et id */}
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle icon-ajout-image"></i>
              </label>
              <input
                id="image-upload"
                type="file"
                // on cache input
                hidden
                accept="image/png, image/jpeg"
                // onChange={validateImg}
              />
            </div>
            {/* création des différents champs */}
            <input
              placeholder="Nom"
              required
              className="input-inscription"
              type="text"
            />{" "}
            <input
              placeholder="Prenom"
              required
              className="input-inscription"
              type="text"
            />{" "}
            <input
              placeholder="Pseudo ou Nom utilisateur"
              required
              className="input-inscription"
              type="text"
            />{" "}
            <input
              placeholder="e-mail"
              required
              className="input-inscription"
              type="email"
            />
            <input
              placeholder="Mot de passe"
              required
              className="input-inscription"
              type={isHidden ? "password" : "text"}
              minLength="6"
            />
            {/* afficher ou masquer les mots de passe */}
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
              className="input-inscription"
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
            <div className="ui form ">
              <div className=" fields espace-gap" style={{ gap: "10px" }}>
                <label for="gender ">
                  <span className="sexe">Sexe:</span>
                </label>
                <div className="field" style={{ width: "25%" }}>
                  <div className="ui radio checkbox item">
                    <input type="radio" name="gender" tabindex="0" />
                    <label>Masculin</label>
                  </div>
                </div>
                <div className="field" style={{ width: "25%" }}>
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" tabindex="0" />
                    <label>Feminin</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" tabindex="0" />
                    <label>Autre</label>
                  </div>
                </div>
              </div>
            </div>
            {/*creation d'une case à cocher */}
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabindex="0" />
                <label>
                  J'accepte les{" "}
                  <span
                    className="cgu-style"
                    onClick={() => {
                      setIsClicked(true);
                    }}
                  >
                    conditions générales d'utilisation
                  </span>
                </label>
                {/* redirection vers une autre page en cas de clique */}
                {isClicked && (
                  <Navigate
                    to="/condition-general-utilisation"
                    replace={true}
                  />
                )}
                <br />
              </div>
            </div>
            <br />
            {/* création des boutons */}
            <button className="inscription-bouton" type="submit">
              <PersonAddIcon /> S'inscrire
            </button>
            <button className="connexion-bouton">
              <LoginIcon /> Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
