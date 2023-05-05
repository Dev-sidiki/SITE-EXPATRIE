import express from "express";
import {
  searchUserController,
  getUserController,
  getUserByIdParamsController,
  getAllUserController,
  updateUserController,
  followUserController,
  unfollowUserController,
  suggestionUserController,
  deleteUserController,
} from "../controllers/users.controller.js";

import verifyUser, {
  requireAdmin,
} from "../middleware/verifAuthentification.js";

//initialisation de la variable de gestion des routes
const router = express.Router();

// ==========
// USERS DATABASE
// ==========

//route  d'affichage des info d'un user connecté
router.get("/", verifyUser, getUserController);

//route  d'affichage des info d'un user connecté
router.get("/:id", verifyUser, getUserByIdParamsController);

//route  d'affichage des info de tous les users inscrit
router.post("/all_users", verifyUser, requireAdmin, getAllUserController);

//route  d'affichage des info d'un user recherché
router.get("/search_username", verifyUser, searchUserController);

// route de suggestion d'amis à un user connecté
router.get(
  "/other_users/suggestionsUser",
  verifyUser,
  suggestionUserController
);

// route de mis à jour du profil d'un user
router.patch("/update_user", verifyUser, updateUserController);

// route pour s'abonner à un user
router.patch("/follow/:id", verifyUser, followUserController);

// route pour se désabonner a un user
router.patch("/unfollow/:id", verifyUser, unfollowUserController);

// suppression des elements
router.delete("/:id", verifyUser, deleteUserController);

// pour pouvoir importer nos routes
// sous n'importe quel nom a cause du mot cle default
export default router;
