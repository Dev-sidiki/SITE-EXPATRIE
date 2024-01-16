import mongoose from "mongoose";

// schema user contenant les champs de notre tables user
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },

    postDescription: {
      type: String,
      default: "",
    },

    postPicture: {
      type: String,
      default: "",
    },
    postVideo: {
      type: String,
      default: "",
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],

    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// creation de fontions statique pour les donnée (CRUD users)
postSchema.static("createPost", createPost);
postSchema.static("getPostById", getPostById);
postSchema.static("getAllPost", getAllPost);
postSchema.static("updatePost", updatePost);
postSchema.static("getUserPost", getUserPost);
postSchema.static("addLikePost", addLikePost);
postSchema.static("unLikePost", unLikePost);
postSchema.static("deletePost", deletePost);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

async function createPost(
  userId,
  postDescription,
  postPicture,
  postVideo,
  like,
  comments
) {
  return await this.create({
    userId,
    postDescription,
    postPicture,
    postVideo,
    like,
    comments,
  });
}

async function getPostById(_id) {
  const post = await this.findById({ _id }).select("-password");
  if (!post) return false;
  return post;
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
const collectionName = "posts";
export const postModel = mongoose.model("post", postSchema, collectionName);
