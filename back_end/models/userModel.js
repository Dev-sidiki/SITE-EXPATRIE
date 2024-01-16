import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

// schema user contenant les champs de notre tables user
const userSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },

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
    pseudo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 25,
    },
    gender: {
      type: String,
      required: true,
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
    phone: {
      type: String,
      default: "",
    },
    nationality: {
      type: String,
      trim: true,
      maxlength: 25,
      default: "",
    },
    liveIn: {
      type: String,

      trim: true,
      maxlength: 25,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    occupation: {
      type: String,
      trim: true,
      maxlength: 25,
      default: "",
    },
    workIn: {
      type: String,
      trim: true,
      maxlength: 25,
      default: "",
    },
    studyAt: {
      type: String,
      trim: true,
      maxlength: 25,
      default: "",
    },
    biography: {
      type: String,
      default: "",
      maxlength: 200,
    },
    status: {
      type: String,
      maxlength: 50,
      default: "",
    },
    leisure: {
      type: String,
      trim: true,
      maxlength: 25,
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

    userBlocked: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],

    userReported: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

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
userSchema.static("deleteUser", deleteUser);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

async function createUser(
  profilePicture,
  firstname,
  lastname,
  pseudo,
  email,
  gender,
  password
) {
  return await this.create({
    profilePicture,
    firstname,
    lastname,
    pseudo,
    email,
    gender,
    password,
  });
}

async function getUserByEmail(email) {
  const user = await this.findOne({ email });
  if (!user) return false;
  return user;
}

async function getUserByUsername(pseudo) {
  const user = await this.findOne({ pseudo }).limit(10);
  if (!user) return false;
  return user;
}

async function getUserById(_id) {
  const user = await this.findById({ _id }).select("-password");
  if (!user) return false;
  return user;
}

async function getAllUsers() {
  const AllUsers = await this.find().select("-password");
  return AllUsers;
}

async function refreshToken(_id, token) {
  const newToken = await this.findOneAndUpdate(
    { _id },
    {
      $set: {
        tokens: { token: token, dateCreation: Date.now() },
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newToken;
}

async function updatePassword(email, newhashedPass) {
  const newPassword = await this.findOneAndUpdate(
    { email },
    { $set: { password: newhashedPass } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newPassword;
}

async function updateUserProfil(
  _id,
  newProfilePicture,
  newFirstname,
  newLastname,
  newEmail,
  newNationality,
  newLiveIn,
  newAddress,
  newPhone,
  newOccupation,
  newWorkIn,
  newStudyAt,
  newBiography,
  newLeisure
) {
  const newProfil = await this.findOneAndUpdate(
    { _id },
    {
      $set: {
        profilePicture: newProfilePicture,
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        nationality: newNationality,
        liveIn: newLiveIn,
        phone: newPhone,
        occupation: newOccupation,
        workIn: newWorkIn,
        studyAt: newStudyAt,
        address: newAddress,
        biography: newBiography,
        leisure: newLeisure,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newProfil;
}

async function deleteUser(_id) {
  const deleteUserInfo = await this.deleteOne({ _id }).exec();
  return deleteUserInfo;
}

async function lastData() {
  const lastUserId = await this.find({}).sort({ createdAt: -1 }).limit(1);
  return lastUserId;
}

async function countAllUsers() {
  const countAllUsers = await this.find().count();
  return countAllUsers;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "users";
export const userModel = mongoose.model("user", userSchema, collectionName);
