import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";

// cette fonction permet de confirmer si l'utilisateur a des identifiant correcte
// depuis la base de donner avant de naviguer sur le site
const verifyUser = async (req, res, next) => {
  // on fait appel a notre notre secret dans variable d'environnement depuis le fichier .env
  const { APP_TOKEN_SECRET } = process.env;
  try {
    // on recupere notre jeton JWT dans l'entete
    const token =
      req.body.tokens || req.query.token || req.headers["authorization"];

    // condition si abscence de token
    if (!token)
      return res
        .status(400)
        .json({ msg: "A token is required for authentication" });

    // si y'a un token on verifie le token
    const decoded = jwt.verify(token, APP_TOKEN_SECRET);

    // condition si token invalide
    if (!decoded)
      return res.status(400).json({ msg: "Invalid Authentication." });

    // si token valide ,on recherche le user connecté
    // puis on l'enregistre dans notre req
    const user = await userModel.findOne({ _id: decoded.id });
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export default verifyUser;

// Autorise uniquement l'accès à la page si l'utilisateur est un administrateur.
// Nécessite l'utilisation du middleware `verifyUser`.
export function requireAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    next(new Error("Permission denied."));
    return;
  }

  next();
}
