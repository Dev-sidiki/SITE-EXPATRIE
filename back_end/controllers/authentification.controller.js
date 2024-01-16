import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/userModel.js";
import { hashPassword } from "../utils/hashCode.js";

import { codepinModel } from "../models/codepinModel.js";
import { randomPinNumber } from "../utils/randomNumber.js";
// fonction d'inscription d'un user dans la base de donnée
export async function createUserController(req, res) {
  try {
    const { firstname, lastname, pseudo, email, gender, password } = req.body;
    const profilePicture = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
    const expressionReguliere =
      /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    let newUserName = pseudo.toLowerCase().replace(/ /g, "");

    const user_name = await userModel.getUserByUsername(newUserName);
    if (user_name)
      return res
        .status(400)
        .json({ msg_error: "Ce nom d'utilisateur existe déjà" });

    //verification du format de mail
    if (!expressionReguliere.test(email)) {
      return res
        .status(400)
        .json({ msg_error: "Le format de cet e-mail est incorrect" });
    }

    const user_email = await userModel.getUserByEmail(email);
    if (user_email)
      return res.status(400).json({ msg_error: "Cet e-mail est déjà utilisé" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ msg_error: "votre mot de passe est trop court" });

    if (!req.file) {
      // on crée une instance de user
      const newUser = new userModel({
        firstname,
        lastname,
        pseudo,
        email,
        gender,
        password: hashPassword(password),
      });

      // enregistrement de l'utilisateur
      const user = await newUser.save();

      // on affiche un message de succes depuis notre postman
      if (user._id) {
        return res.status(200).json({
          statut: "inscrit",
          message: "un utilisateur à été crée sans photo de profil",
          userId: user._id,
        });
      }
    } else {
      // on crée une instance de user
      const newUser = new userModel({
        profilePicture,
        firstname,
        lastname,
        pseudo,
        email,
        gender,
        password: hashPassword(password),
      });

      // enregistrement de l'utilisateur
      const user = await newUser.save();

      // on affiche un message de succes depuis notre postman
      if (user._id) {
        return res.status(200).json({
          statut: "inscrit",
          message: "un utilisateur à été crée avec photo de profil",
          userId: user._id,
          dataImage: {
            name: req.file.filename,
            mimetype: req.file.mimetype,
            size: req.file.size,
          },
        });
      }
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction de connexion d'un user
export async function loginUserController(req, res) {
  const { APP_TOKEN_SECRET, APP_TOKEN_SECRET_SHORTIME_EXP_DAY } = process.env;

  const createAccessToken = (payload) => {
    return jwt.sign(payload, APP_TOKEN_SECRET, {
      expiresIn: APP_TOKEN_SECRET_SHORTIME_EXP_DAY,
    });
  };

  try {
    const { email, password } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user)
      return res.status(400).json({ msg_error: "Cet e-mail est incorrect." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ msg_error: "Ce mot de passe est incorrect." });

    //si tout les contrôles on été vérifiés
    if (user && isMatch) {
      const access_token = createAccessToken({
        id: user._id,
      });

      const refreshToken = await userModel.refreshToken(user._id, access_token);

      if (refreshToken) {
        return res.status(200).json({
          statut: "connecté",
          message: "Connexion réussie!",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction de déconnexion d'un user
export async function logoutUserController(req, res) {
  // on recupere l'id depuis notre entete pour le passer en parametre
  const _id = req.user.id;

  console.log(_id);

  // on modifie le contenu du token de utilisateur(_id) depuis la base de donnée
  // ce qui rend le token invalid et donc impossible de naviguer sur le site
  const deleteUser = await userModel.refreshToken(_id, "");

  // message en cas de deconnection réussi
  if (deleteUser._id) {
    return res.status(200).json({
      status: "déconnexion",
      message: "Vous êtes déconnecté",
    });
  }

  // message en cas d'erreur
  res.json({
    status: "erreur",
    message: "deconnexion impossible, réessayer plustard",
  });
}

// fonction de génération d'un token user
export async function refreshTokenUserController(req, res) {
  try {
    // on fait appel à la variable d'environnement depuis le fichier .env
    // pour la creation de notre token
    const { APP_TOKEN_SECRET, APP_REFRESH_TOKEN_EXP_DAY } = process.env;

    // fonction de creation de jeton pour l'authentification a long terme
    const createRefreshToken = (payload) => {
      return jwt.sign(payload, APP_TOKEN_SECRET, {
        expiresIn: APP_REFRESH_TOKEN_EXP_DAY,
      });
    };

    // on recupere l'id depuis notre entete pour le passer en parametre
    const _id = req.user.id;

    const user_info = await userModel.getUserById(_id);
    if (!user_info)
      return res.status(400).json({ msg_error: "Vous devez vous connecter." });
    const refresh_token = user_info.tokens.token;
    // console.log(refresh_token);
    if (!refresh_token)
      return res.status(400).json({ msg_error: "Token abscent." });

    // on vérifie le token
    jwt.verify(refresh_token, APP_TOKEN_SECRET, async (err, result) => {
      if (err)
        return res.status(400).json({ msg_error: "Veuillez-vous reconnectez" });

      const user = await userModel.getUserById(_id);
      // console.log(user[0].tokens.token);

      if (!user)
        return res.status(400).json({ msg_error: "Utilisateur inexistant" });

      const access_token = createRefreshToken({ id: result.id });

      const newToken = await userModel.refreshToken(user._id, access_token);

      if (newToken) {
        res.status(200).json({
          access_token,
          user,
        });
      }
    });
  } catch (err) {
    return res.status(500).json({ msg_error: err.message });
  }
}

// la fonction qui permet au user de recuperer son code pin
// pour la modification de son mot de passe
export async function recupPinController(req, res) {
  // on recupere l'email du user
  const { email } = req.body;
  // gestion erreur mail
  let errors = { message: "" };
  // longueur du code pin
  const pinLength = 6;

  // les differentes contrôle a faire avant la recuperation du codepin d'un user
  // cela evite que le serveur il crache

  if (!email) {
    // message si champ mail vide
    errors.message = "l'email est obligatoire";
    res.json({ errors });
    return;
  }

  // on verifie si le mail existe dans la base de donnée
  const loggedUser = await userModel.getUserByEmail(email);
  if (!loggedUser) {
    errors.message =
      " Votre compte(mail) n'a pas été trouvé dans la base donnée";
    res.json({ errors });
    return;
  }

  // on genere un codepin de longueur 6 aleatoirement
  const randPin = randomPinNumber(pinLength);

  // on prepare une variable pour la recuperation du codepin
  const newPin = new codepinModel({
    // pour recuperer les data envoyé
    email: email,
    // code pin generer aleatoirement
    codepin: randPin,
  });

  // si le mail existe dans la base de donnée
  if (loggedUser && loggedUser._id) {
    // on enregistre le code pin et le mail dans notre base de donnée
    const setPin = await newPin.save();
    // on envoie un mail de confirmation a notre user
    emailProcessMailgun({
      email,
      pin: setPin.codepin,
      type: "recup-code-pin",
    });

    // important  de mettre le return a l'interieur du if
    // si on n'as plusieur res.json pour eviter de faire cracher le serveur
    return res.status(200).json({
      statut: "code réçu",
      // message en cas de code envoyé
      message:
        "Le code pin de réinitialisation vous sera envoyé sous peu via le mail renseigné",
    });
  }
  // message en cas d'erreur
  res.json({
    statut: "erreur",
    message: " Veuillez ressayer plustard",
  });
}

// la fonction qui permet au user de modifier son mot de passe
// après la recupération du code pin
export async function updatePasswordController(req, res) {
  // recuperation des données saisie par le user
  const { email, codepin, newPassword } = req.body;

  // variable de gestion des erreurs sur les champs saisis
  let errors = { email: "", codepin: "", newPassword: "" };

  // les differentes contrôle a faire avant la modification du mot de passe d'un user
  // cela evite que le serveur il crache

  if (!email) {
    // message d'erreur si champ vide
    errors.email = "l'email est obligatoire";
    res.json({ errors });
    return;
  }

  if (!codepin) {
    // message d'erreur si champ vide
    errors.codepin = "le code pin est obligatoire";
    res.json({ errors });
    return;
  }

  if (!newPassword) {
    // message d'erreur si champ vide
    errors.password = "le nouveau mot de passe est obligatoire";
    res.json({ errors });
    return;
  }

  // on recupere le codepin du user depuis la base de donnée
  const getPin = await updatePinModel.getPinByEmailPin(email, codepin);

  // on verifie la validité du mail saisie
  if (email !== getPin.email) {
    errors.email = " Votre compte(mail) n'a pas été trouvé dans la base donnée";
    return res.json({ errors });
  }

  // on verifie la validité du code pin saisie
  if (codepin !== getPin.codepin) {
    errors.codepin = "le code pin est incorrect";
    return res.json({ errors });
  }

  // on verifie la longueur du nouveau mot de passe
  if (newPassword.length < 6) {
    errors.newPassword = "mot de passe trop court";
    return res.json({ errors });
  }

  // si on n'as le codepin
  if (getPin?._id) {
    // on recupere la date de creation du code pin
    const dbDate = getPin.createdAt;

    // on definir une date d'expiration
    const expiresIn = 1;

    let expDate = dbDate.setDate(dbDate.getDate() + expiresIn);

    // console.log(expDate);

    // on recupere la date d'aujourdhui

    const today = new Date();

    // o verifie si le code a expiré ou pas
    if (today > expDate) {
      return res.json({
        statut: "erreur",
        message:
          "le delai du code pin est expiré, veuillez demander un autre code pin",
      });
    }

    // on chiffre le mot de passe
    const hashedPass = hashPassword(newPassword);

    // on met a jour le mot de passe du user
    const user = await userModel.updatePassword(email, hashedPass);

    //on envoi un mail de confirmation en cas de succès
    if (user._id) {
      // mail de notification
      emailProcessMailgun({ email, type: "modification-mot-de-passe" });

      // important  de mettre le return a l'interieur du if
      return res.status(200).json({
        statut: "modification éffectué",
        // message en cas de succès
        message: "mot de passe changé avec succes",
      });
    }
  }
  res.json({
    statut: "erreur",
    // message en cas d'erreur
    message: "impossible de modifier le mot de passe. Essayez plus tard",
  });
}
