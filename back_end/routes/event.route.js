import express from "express";
import imageMiddleware from "../middleware/multerMiddleware.js";
import verifyUser from "../middleware/verifAuthentification.js";
import {
  createEventController,
  deleteEventController,
  getAllEventController,
  getEventUserByIdParamController,
  getEventUserController,
  getOtherEventUserController,
  updateEventController,
  updateEventStatusController,
} from "../controllers/event.controller.js";

//initialisation de la variable de gestion des routes
const router = express.Router();

// ==========
// TICKETS DATABASE
// ==========

// // route de creation d'un évènement
router.post("/", verifyUser, imageMiddleware, createEventController);

// route d'affichage des évènements associés à un user
router.get("/", verifyUser, getEventUserController);

// route d'affichage des évènements associés à d'autre user
router.get("/", verifyUser, getOtherEventUserController);

// route d'affichage de tous les évènements
router.get("/all-events", verifyUser, getAllEventController);

// route d'affichage des détails sur  associé à un évènement
router.post("/:_id", verifyUser, getEventUserByIdParamController);

// route de mise a jour des conversation client-operateur
// put est utiliser normalement pour un remplacement total de tous les champs
router.put("/:_id", verifyUser, imageMiddleware, updateEventController);

// route de mise a jour des statut de l'évènement
// patch est utiliser normalement pour un remplacement partiel, on peut donc envoyer le champs que l'on souhaite modifier
router.patch("/admin-response/:_id", verifyUser, updateEventStatusController);

// route de suppression d'un évènement
router.delete("/:_id", verifyUser, deleteEventController);

// pour pouvoir importer nos routes
// sous n'importe quel nom a cause du mot cle default
export default router;
