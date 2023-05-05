import { postDataAPI, patchDataAPI } from "../../services/fechtData";

// les variables qui stocke le contenu de nos actions
// ils changent le contenu de notre state initial
// depuis le reducer selon l'action effectué par le user
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const RECUPIN_USER = "RECUPIN_USER";
export const UPDATE_PASSWORD_USER = "UPDATE_PASSWORD_USER";

// API de enregistrement  user
export const register = (
  photo,
  firstname,
  lastname,
  username,
  email,
  phone,
  password,
  gender
) => {
  return async (dispatch) => {
    const registerUser = await postDataAPI("verify-user/register_user", {
      photo,
      firstname,
      lastname,
      username,
      email,
      phone,
      password,
      gender,
    });

    if (registerUser) {
      dispatch({ type: REGISTER_USER, payload: res.data });
    }
  };
};

// API de login user
export const login = (email, password) => {
  return async (dispatch) => {
    const loginUser = await postDataAPI("verify-user/login_user", {
      email,
      password,
    });

    if (loginUser) {
      //on crée un token dans nos bases de donnée local
      localStorage.setItem("token", res.data.token);
      // console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      // console.log(res.data.loggedUser.token);

      dispatch({ type: LOGIN_USER, payload: res.data[0] });
    }
  };
};

// API de recuperation de codepin
export const recupCodepin = (email, phone) => {
  return async (dispatch) => {
    const recupCodepinUser = await postDataAPI("verify-user/reset_password", {
      email,
      phone,
    });

    if (recupCodepinUser) {
      dispatch({ type: RECUPIN_USER, payload: res.data });
    }
  };
};

// API de modification de mot de passe
export const resetPassword = (email, phone, codepin, newPassword) => {
  return async (dispatch) => {
    const recupCodepinUser = await patchDataAPI("verify-user/reset_password", {
      email,
      phone,
      codepin,
      newPassword,
    });

    if (recupCodepinUser) {
      dispatch({ type: UPDATE_PASSWORD_USER, payload: res.data });
    }
  };
};
