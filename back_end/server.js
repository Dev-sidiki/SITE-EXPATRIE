// on importe les paquets et module necessaire pour notre app
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import authentificationRoutes from "./routes/authentification.route.js";
import usersRoutes from "./routes/user.route.js";
import tokenRoutes from "./routes/token.routes.js";
import eventRoutes from "./routes/event.route.js";
// importation de la fonction de gestion d'erreur
import afficheError from "./utils/catchError.js";
// pour la gestion des variable d'environnement
dotenv.config({ path: "./config/.env" });

// on fait appel au variable d'environnement depuis le fichier .env
const { APP_PORT, APP_HOSTNAME, APP_DB_USER_PASS, APP_CLIENT_URL } =
  process.env;
//  on initialise notre application express
const app = express();

// on parametre les authoristaion d'accès
// pour être plus précis
const corsOptions = {
  // on autorise les requete depuis notre front(localhost3000)
  origin: APP_CLIENT_URL,
  credentials: true,

  // pour que les requête marche mieux
  // trouver sur slacoverflow
  // il faut preciser le nom de son token dans le allowedHeaders
  // dans mon cas c'est "Authorization"
  allowedHeaders: ["Authorization", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

// ==========
// MIDDLEWARES
// ==========
//pour proteger notre application  de certaines des vulnérabilités
//lorqu'il sera en production
// à l'interieur de la parenthèse on peut mettre
// une configuration initiale de securité selon nos besoin
app.use(helmet());

// pour le debug
// resultat visible sur la console apres avoir lancer une requete
// l'affichage tiny nous précise le type , statut et le temps de la requête
// possibilité de parametrer l'affichage a l'interieur de la parenthèse selon les besoins
app.use(morgan("tiny"));

// middleware pour autoriser l'accès a notre site
// on precise dans les parametre de cors ceux qui ont
// le droit de faire les requete sur notre site
app.use(cors(corsOptions));

// pour acceder aux images du dossier images
app.use("/images", express.static("./images"));

// middlewares Pour récupérer les données POST en Express simplement
// Une fois que vous avez mis en place les deux ou une des méthodes ci-dessus vous pouvez les récupérer avec req.body sous forme d'un JSON
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// cette ligne de code est proposé par le terminal
// pour supprimer le warning
mongoose.set("strictQuery", false);
// on connecte notre back et notre base de donne qui s'appelle mern_rezo_social
// si le mot de passe est incorrect la connexion va echouer
// la base de donnée ne s'affichera pas sur mongo compass tant qu'elle reste vide
mongoose
  .connect(
    `mongodb+srv://${APP_DB_USER_PASS}@cluster0.w07ju.mongodb.net/mern-france-expat-parrainage`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to Mongo"))
  .catch((err) => console.log("Connected failed", err));

// ==========
// ROUTES
// ==========

// middlewares pour le chargements des différentes routes
// on declenche les fonctions liées à userRoutes quand nous sommes sur ce chemin: "/api/authentification"
app.use("/api/verifyUser", authentificationRoutes);
app.use("/api/user", usersRoutes);
app.use("/api/token", tokenRoutes);
app.use("/api/event", eventRoutes);

// middleware pour pour attrapper l'erreur
// si aucun router est trouver
app.use((req, res, next) => {
  const error = new Error("Resources not found!");
  error.status = 404;
  // le next nous permet de passer au middleware suivant
  next(error);
});

// middleware pour afficher l'erreur en question
// au cas ou l'erreur n'est pas au niveau de la route
app.use((error, req, res, next) => {
  afficheError(error, res);
});
// ==========
// Demarrage de l'application
// ==========

app.listen(APP_PORT, () => {
  console.log(
    `Application connecté à l'adresse suivante http://${APP_HOSTNAME}:${APP_PORT}`
  );
});

export default app;
