import mongoose from "mongoose";

// schema user contenant les champs de notre tables user
const commentSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Types.ObjectId, ref: "post" },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    commentDescription: {
      type: String,
      required: true,
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    articleId: { type: mongoose.Types.ObjectId, ref: "article" },
  },
  {
    timestamps: true,
  }
);
// creation de fontions statique pour les donnée (CRUD users)
commentSchema.static("createComment", createComment);
commentSchema.static("getUserConversations", getUserConversations);
commentSchema.static("getConversations", getConversations);
commentSchema.static("deleteConversation", deleteConversation);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

async function createComment(postId, userId, commentDescription, likes) {
  return await this.create({
    postId,
    userId,
    commentDescription,
    likes,
  });
}

async function getCommentById(_id) {
  const comment = await this.findById({ _id });
  if (!comment) return false;
  return comment;
}

async function getUserPost(_id, userId) {
  const userPost = await this.find({ _id, userId });
  if (!userPost) return false;
  return userPost;
}

async function getAllPost() {
  const allPosts = await this.find().sort({ createdAt: -1 });
  return allPosts;
}

async function addLikePost({ _id, user }) {
  const newLike = await this.findOneAndUpdate(
    { _id },

    {
      $push: {
        likes: { user },
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newLike;
}

async function unLikePost({ _id, user }) {
  const newLike = await this.findOneAndUpdate(
    { _id },
    {
      $pull: {
        likes: { user },
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newLike;
}

async function updatePost(
  _id,
  newPostDescription,
  newPostPicture,
  newPostVideo
) {
  const newProfil = await this.findOneAndUpdate(
    { _id },
    {
      $set: {
        postDescription: newPostDescription,
        postPicture: newPostPicture,
        postVideo: newPostVideo,
      },
    },

    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newProfil;
}

async function deletePost(_id) {
  const deletePostInfo = await this.deleteOne({ _id }).exec();
  return deletePostInfo;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "comments";
export const commentModel = mongoose.model(
  "comment",
  commentSchema,
  collectionName
);
