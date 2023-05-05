import {
  REGISTER_USER,
  LOGIN_USER,
  RECUPIN_USER,
  UPDATE_PASSWORD_USER,
} from "../actions/authentificationAction";

// qui va evoluer selon l'action
// et stocker le contenu du post
const initialeState = {
  isLoading: false,
  isConnect: false,
};

// la fonction qui va gerer notre initialeState
// elle permet de faire evoluer notre state selon l'action effectué
// et nous le retourne
export default function userReducer(state = initialeState, action) {
  switch (action.type) {
    // si inscription user
    case REGISTER_USER:
      // on retourne le state initial
      return {
        ...state,
      };
    // si user est authentifié
    case LOGIN_USER:
      return {
        // on retourne le state initial
        ...state,
        // on change la valeur de isconnect
        isLoading: true,
        isConnect: true,
      };

    // si user veut recuperer son codepin
    case RECUPIN_USER:
      // on retourne le state initial
      return {
        ...state,
      };
    // si user veut changer de mot de passe
    case UPDATE_PASSWORD_USER:
      // on retourne le state initial
      return {
        ...state,
      };
    default:
      return state;
  }
}
