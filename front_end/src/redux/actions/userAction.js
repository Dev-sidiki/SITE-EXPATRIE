import axios from "axios";

import {
  getDataAPI,
  deleteDataAPI,
  postDataWithTokenAPI,
} from "../../services/fechtData";

// les variables qui stocke le contenu de nos actions
// ils changent le contenu de notre state initial
// depuis le reducer selon l'action effectué par le user

export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SEARCH_CLIENT = "SEARCH_CLIENT";
export const LOG_OUT = "LOG_OUT";
export const DELETE_USER = "DELETE_USER";

// fonction qui affiche le profil d'un user
export const getUserProfil = () => {
  return async (dispatch) => {
    // on recupere le token depuis notre base de donnée local
    const accessToken = localStorage.getItem("token");

    // message affiche si pas de token
    if (!accessToken) {
      console.log("Token not found!");
    }

    const getUser = await getDataAPI("/user", accessToken);

    if (getUser) {
      dispatch({ type: GET_USER, payload: res.data[0] });
    }
  };
};

// fonction qui affiche le profil d'un user
export const getAllUsers = () => {
  return async (dispatch) => {
    // on recupere le token depuis notre base de donnée local
    const accessToken = localStorage.getItem("token");

    // message affiche si pas de token
    if (!accessToken) {
      console.log("Token not found!");
    }

    const allUserData = await getDataAPI("/user/all_users", accessToken);

    if (allUserData) {
      dispatch({ type: GET_ALL_USERS, payload: res.data });
    }
  };
};

// fonction de mise a jour du token du user connecté
export const getNewAccesUserProfil = () => {
  return async (dispatch) => {
    // on recupere le token du user connecté
    const accessToken = localStorage.getItem("token");

    // message affiche si pas de token
    if (!accessToken) {
      console.log("Token not found!");
    }

    const newAcces = await getDataAPI("/user/refresh_token", accessToken);

    if (newAcces) {
      dispatch({ type: GET_USER, payload: res.data });
    }
  };
};

//fonction pour filtrer la liste des clients
// il prend parametre la valeur du input
export const filterSearchClient = (search) => {
  return (dispatch) => {
    // on stocke le resultat dans le store dans la variable SEARCH_CLIENT du reducer
    // grace au payload afin de les traités dans le reducer
    // selon nos besoin
    return dispatch({ type: SEARCH_CLIENT, payload: search });
  };
};

// API de déconnexion user
export const logout = () => {
  return async (dispatch) => {
    // on recupere le token depuis notre base de donnée local
    const accessToken = localStorage.getItem("token");

    // message affiche si pas de token
    if (!accessToken) {
      console.log("Token not found!");
    }
    const logoutUser = await deleteDataAPI("user/logout_user", accessToken);

    if (logoutUser) {
      dispatch({ type: LOG_OUT, payload: res.data });
    }
  };
};

// fonction de déconnection d'un user
export const deleteUser = (_id) => {
  return async (dispatch) => {
    // on recupere le token du user connecté
    const accessToken = localStorage.getItem("token");

    // message affiche si pas de token
    if (!accessToken) {
      console.log("Token not found!");
    }

    const logoutUser = await deleteDataAPI(` user/${_id}`, accessToken);

    if (logoutUser) {
      dispatch({ type: LOG_OUT, payload: res.data });
    }
  };
};
