import mongoose from "mongoose";

// schema user contenant les champs de notre tables user
const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Types.ObjectId,
      ref: "conversation",
      required: true,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },

    text: {
      type: String,
      default: "",
    },
    messagePicture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
// creation de fontions statique pour les donnée (CRUD users)
messageSchema.static("createMessage", createMessage);
messageSchema.static("getMessageById", getMessageById);
messageSchema.static("deleteMessage", deleteMessage);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

// fonction appelé par le controller pour l'inscription d'un nouveau utilisateur dans la base de donneé
async function createMessage(conversationId, senderId, text, messagePicture) {
  return await this.create({
    conversationId,
    senderId,
    text,
    messagePicture,
  });
}

async function getMessageById(_id) {
  const message = await this.findById({ _id });
  if (!message) return false;
  return message;
}

async function deleteMessage(_id) {
  const deletePostInfo = await this.deleteOne({ _id }).exec();
  return deletePostInfo;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "messages";
export const messageModel = mongoose.model(
  "message",
  messageSchema,
  collectionName
);
