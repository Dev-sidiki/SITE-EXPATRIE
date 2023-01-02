// on importe les paquets et fichiers necessaire pour notre app
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

// pour la gestion des variable d'environnement
dotenv.config({ path: "./config/.env" });

// on fait appel au variable d'environnement depuis le fichier .env
const { APP_PORT, APP_HOSTNAME, APP_DB_USER_PASS, APP_CLIENT_URL } =
  process.env;
//  on initialise notre application express
const app = express();

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

// application connectau port 5000
app.listen(APP_PORT, () => {
  console.log(
    `Application connecté à l'adresse suivante http://${APP_HOSTNAME}:${APP_PORT}`
  );
});
