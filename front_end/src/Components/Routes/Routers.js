// importation des modules necessaire
import React from "react";
import { Routes, Route } from "react-router-dom";
// importation des differentes pages de notre application
import Inscription from "../inscription/Inscription.composant.js";
import Home from "../../Pages/Home/Home.js";
import Connexion from "../login/Connexion.composant.js";

// imporation du menu de navigation
import Footer from "../../Layouts/partials/Footer.composant.js";
import Dashboard from "../../Pages/Dashboard/Dashboard.js";
import About from "../../Pages/apropos/About.js";
import Abonnement from "../../Pages/abonnement/Abonnement.js";
import Securite from "../../Pages/securite/Securite.js";
import Service from "../../Pages/assistance/Service.js";

// le composant qui contient les routes vers nos
// differentres pages
const Routers = () => {
  return (
    <div>
      {/* les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/abonnement" element={<Abonnement />} />
        <Route path="/securite" element={<Securite />} />
        <Route path="/service" element={<Service />} />
        <Route path="/expat-dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Routers;
