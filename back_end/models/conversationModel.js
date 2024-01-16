import mongoose from "mongoose";

// schema user contenant les champs de notre tables user
const conversationSchema = new mongoose.Schema(
  {
    members: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);
// creation de fontions statique pour les donnée (CRUD users)
conversationSchema.static("createConversation", createConversation);
conversationSchema.static("getUserConversations", getUserConversations);
conversationSchema.static("getConversations", getConversations);
conversationSchema.static("deleteConversation", deleteConversation);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

async function createConversation(members) {
  return await this.create({
    members,
  });
}

async function getUserConversations(_id) {
  const chat = await this.find({
    members: { $in: [_id] },
  });
  if (!chat) return false;
  return chat;
}

async function getConversations(firstId, secondId) {
  const conversations = await this.findOne({
    members: { $all: [firstId, secondId] },
  });
  if (!conversations) return false;
  return conversations;
}

async function deleteConversation(_id) {
  const deletePostInfo = await this.deleteOne({ _id }).exec();
  return deletePostInfo;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "conversations";
export const conversationModel = mongoose.model(
  "conversation",
  conversationSchema,
  collectionName
);
