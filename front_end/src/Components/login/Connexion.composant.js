import React, { useRef, useState } from "react";

import "../../Styles/connexion.css";
import loginImage from "../../Assets/images/login.png";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import MenuHorizontal from "../menus/MenuHorizontal";

const Connexion = () => {
  const email = useRef();
  const password = useRef();
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <MenuHorizontal />
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc">
            <strong> CONNEXION:</strong> Connect with friends and the world
            around you on Lamasocial.
          </span>
          <img src={loginImage} alt="img-login" className="login-image" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="e-mail"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Mot de passe"
              type={isHidden ? "password" : "text"}
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            {isHidden ? (
              <span
                className="visibility-login"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityIcon />
              </span>
            ) : (
              <span
                className="visibility-login"
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                <VisibilityOffIcon />
              </span>
            )}
            <button className="loginButton" type="submit">
              <LoginIcon /> Se connecter
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />disabled={isFetching}
              ) : (
                "Log In"
              )} */}
            </button>
            <span className="loginForgot">
              Avez-vous oublié votre mot de passe <i class="question icon"></i>
            </span>
            <Link to="/change-password" className="recuPin">
              <div>
                <i className="hand point right icon"></i> Cliquez ici
                {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
