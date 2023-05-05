import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

// schema user contenant les champs de notre tables user
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    nationality: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    occupation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      //pour valider le mail
      validate: [isEmail],
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    residence: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    address: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    gender: {
      type: String,
      required: true,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    biographie: {
      type: String,
      default: "",
      maxlength: 200,
    },
    statut: {
      type: String,
      maxlength: 50,
      required: true,
      default: "",
    },
    leisure: {
      type: String,
      trim: true,
      maxlength: 25,
    },
    website: {
      type: String,
      default: "",
    },
    // les personnes qui vous suivent(abonnées)
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    // les personnes que vous suivez
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    saved: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],

    //le jeton à court terme
    tokens: {
      token: {
        type: String,
        maxlength: 500,
        default: "",
      },
      dateCreation: {
        type: Date,
        required: true,
        default: Date.now(),
      },
    },
  },
  {
    timestamps: true,
  }
);

// creation de fontions statique pour les donnée (CRUD users)
userSchema.static("createUser", createUser);
userSchema.static("lastData", lastData);
userSchema.static("getUserByEmail", getUserByEmail);
userSchema.static("getUserById", getUserById);
userSchema.static("getUserByUsername", getUserByUsername);
userSchema.static("getAllUsers", getAllUsers);
userSchema.static("countAllUsers", countAllUsers);
userSchema.static("refreshToken", refreshToken);
userSchema.static("updatePassword", updatePassword);
userSchema.static("updateUserProfil", updateUserProfil);
userSchema.static("verifyUser", verifyUser);
userSchema.static("deleteUser", deleteUser);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

// fonction appelé par le controller pour l'inscription d'un nouveau utilisateur dans la base de donneé
async function createUser(
  firstname,
  lastname,
  username,
  nationality,
  email,
  occupation,
  residence,
  statut,
  gender,
  password
) {
  return await this.create({
    firstname,
    lastname,
    username,
    nationality,
    email,
    occupation,
    residence,
    statut,
    gender,
    password,
  });
}

// fonction appelé par le controller pour rechercher dans la base de donné un utilisateur via son mail
//  et nous le retourne
async function getUserByEmail(email) {
  const user = await this.findOne({ email });
  if (!user) return false;
  return user;
}

// fonction appelé par le controller pour rechercher dans la base de donné un utilisateur via son nom d'utilisateur
//  et nous le retourne
async function getUserByUsername(username) {
  const user = await this.findOne({ username })
    .limit(10)
    .select("firstname lastname username avatar");
  if (!user) return false;
  return user;
}

// fonction appelé par le controller pour rechercher dans la base de donné un utilisateur via son id
//  et nous le retourne
async function getUserById(_id) {
  const user = await this.findById({ _id }).select("-password");
  if (!user) return false;
  return user;
}

// la fonction qui cherche la liste de tous les utilisateurs pour nous les afficher
// depuis la base de donnée vers le front
async function getAllUsers() {
  // n'affiche pas le password en front
  const AllUsers = await this.find().select("-password");
  return AllUsers;
}

// fonction appelé par le controller pour actualiser le token d'un utilisateur
async function refreshToken(_id, token) {
  const newToken = await this.findOneAndUpdate(
    // recherche via id utilisateur
    { _id },
    // on met a jour la valeur du token ainsi que la date de mise a jour
    {
      $set: {
        tokens: { token: token, dateCreation: Date.now() },
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newToken;
}

// fonction appelé par le controller pour modifier le mot de passe d'un utilisateur
// depuis la base de donnée
async function updatePassword(email, newhashedPass) {
  const newPassword = await this.findOneAndUpdate(
    // recherche via son mail
    { email },
    // on modifie le mot de passe utiisateur
    // par le nouveau mot de passe haché
    { $set: { password: newhashedPass } },
    // pour valider le changement
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newPassword;
}

// fonction appelé par le controller pour modifier le profil d'un utilisateur
// depuis la base de donnée
async function updateUserProfil(
  _id,
  newFirstname,
  newLastname,
  newEmail,
  newAvatar,
  newPhone,
  newAddress,
  newGender,
  newBiographie,
  neWebsite,
  newLeisure
) {
  const newProfil = await this.findOneAndUpdate(
    // recherche via son id
    { _id },
    // on modifie le mot de passe utiisateur
    // par le nouveau mot de passe haché
    {
      $set: {
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        avatar: newAvatar,
        phone: newPhone,
        address: newAddress,
        gender: newGender,
        biographie: newBiographie,
        website: neWebsite,
        leisure: newLeisure,
      },
    },
    // pour valider le changement
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newProfil;
}

// fonction appelé par le controller pour verifier l'authentification d'un utilisateur
// depuis la base de donnée
async function verifyUser(_id, email) {
  const newUser = await this.findOneAndUpdate(
    // recherche via son id et mail
    { _id, email, isVerified: false },
    // on ajoute comme membre
    { $set: { estMembre: true } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newUser;
}

// la fonction qui supprime les info d'un utilisateur
// depuis la base de donnée
async function deleteUser(_id) {
  const deleteUserInfo = await this.deleteOne({ _id }).exec();
  return deleteUserInfo;
}

// une fonction qui affichera la dernière donnée de notre db
async function lastData() {
  const lastUserId = await this.find({}).sort({ createdAt: -1 }).limit(1);
  return lastUserId;
}

// la fonction appelé par le controller pour compter le nombre de user
async function countAllUsers() {
  const countAllUsers = await this.find().count();
  return countAllUsers;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "users";
export const userModel = mongoose.model("User", userSchema, collectionName);
