import express from "express";

import { sayHelloController } from "../controllers/hello.controller.js";

//initialisation de la variable de gestion des routes
const router = express.Router();

// route d'affichage du message
router.get("/", sayHelloController);

export default router;
