// importation des modules necessaire
import React from "react";
import { Routes, Route } from "react-router-dom";

//importation des composant necessaire au bon fonctionnement notre application
import Inscription from "../inscription/Inscription.composant.js";
import PasswordChange from "../password-reset/PasswordChange.js";
import Connexion from "../login/Connexion.composant.js";
import Home from "../../Pages/home/Home.js";
import Footer from "../../Layouts/partials/Footer.composant.js";
import About from "../../Pages/apropos/About.js";
import Abonnement from "../../Pages/abonnement/Abonnement.js";
import Securite from "../../Pages/securite/Securite.js";
import Service from "../../Pages/assistance/Service.js";
import Conseil from "../../Pages/conseil/Conseil.js";
import Communaute from "../../Pages/communaute/Communaute.js";
import PageIntrouvable from "../../Pages/pageIntrouvable/PageIntrouvable.js";
import Acceuil from "../../Pages/accueil/Acceuil.js";

// le composant qui contient les routes vers nos
// differentres pages
const Routers = () => {
  return (
    <div>
      {/* les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conseil" element={<Conseil />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/change-password" element={<PasswordChange />} />
        <Route path="/abonnement" element={<Abonnement />} />
        <Route path="/securite" element={<Securite />} />
        <Route path="/service" element={<Service />} />
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Routers;
