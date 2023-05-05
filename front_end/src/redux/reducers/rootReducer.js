import { combineReducers } from "redux";
// import articleReducer from "./articleReducer.js";
// import commentReducer from "./commentReducer.js";
import usersReducer from "./usersReducer.js";
// import categoryReducer from "./categoryReducer.js"; // la fonction qui contient toutes les actions
import authenticationReducer from "./authentificationReducer.js";
// la fonction qui contient toutes les actions
// liées a notre application, c'est la carte maitresse de l'app
export default combineReducers({
  authenticationReducer,
  usersReducer,
  //   articleReducer,
  //   commentReducer,
  //   categoryReducer,
});
