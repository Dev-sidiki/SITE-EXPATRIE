// importation des modules necessaire
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

//importation des composant necessaire au bon fonctionnement notre application
import Inscription from "../inscription/Inscription.composant.js";
import PasswordChange from "../password-reset/PasswordChange.js";
import Connexion from "../login/Connexion.composant.js";
import Home from "../../Pages/home/Home.js";
import About from "../../Pages/apropos/About.js";
import Abonnement from "../../Pages/abonnement/Abonnement.js";
import Securite from "../../Pages/securite/Securite.js";
import Service from "../../Pages/assistance/Service.js";
import Conseil from "../../Pages/conseil/Conseil.js";
import Communaute from "../../Pages/communaute/Communaute.js";
import PageIntrouvable from "../../Pages/pageIntrouvable/PageIntrouvable.js";
import Accueil from "../../Pages/accueil/Acceuil.js";
import AccueilMenu from "../menus/AccueilMenu.js";
import LeftBar from "../leftbar/LeftBar.js";
import RightBar from "../rightbar/RightBar.js";
import Evenement from "../../Pages/evenement/Evenement.js";
import Emploi from "../../Pages/emploi/Emploi.js";
import InfoEmploi from "../../Pages/infoEmploi/InfoEmploi.js";

// le composant qui contient les routes vers nos
// differentres pages
const Routers = () => {
  const Layout = () => {
    return (
      <div>
        <AccueilMenu />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
    //   return <Navigate to="/login" />;
    // }

    return children;
  };

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
        <Route path="/acceuil" element={<Accueil />} />
        <Route path="/evenement" element={<Evenement />} />
        <Route path="/emploi" element={<Emploi />} />
        <Route path="/detail-emploi" element={<InfoEmploi />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Routes>
    </div>
  );
};

export default Routers;
