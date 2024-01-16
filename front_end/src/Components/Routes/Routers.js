// importation des modules necessaire
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

//importation des composant necessaire au bon fonctionnement notre application
import Register from "../register/Register.js";
import PasswordChange from "../password-reset/PasswordChange.js";
import Login from "../login/Login.js";
import PageIntrouvable from "../../Pages/pageIntrouvable/PageIntrouvable.js";
import Accueil from "../../Pages/accueil/Acceuil.js";
import AccueilMenu from "../menus/AccueilMenu.js";
import LeftBar from "../leftbar/LeftBar.js";
import RightBar from "../rightbar/RightBar.js";
import Evenement from "../../Pages/evenement/Evenement.js";
import Emploi from "../../Pages/emploi/Emploi.js";
import InfoEmploi from "../../Pages/infoEmploi/InfoEmploi.js";
import Profil from "../../Pages/profil/Profil.js";
import Admin from "../../Pages/admin/Admin.js";
import InfoEvenement from "../../Pages/infoEvenement/InfoEvenement.js";
import ConversationHistory from "../conversation/ConversationHistory.composant.js";
import Home from "../../Pages/home/Home.js";

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
        <Route path="/page-de-connexion" element={<Login />} />
        <Route path="/page-inscription-client" element={<Register />} />
        <Route
          path="/changement-mot-de-passe-client"
          element={<PasswordChange />}
        />
        <Route path="/expat-media-france" element={<Accueil />} />
        <Route path="/liste-des-evenements" element={<Evenement />} />
        <Route
          path="/detail-sur-evenement-selectionne"
          element={<InfoEvenement />}
        />
        <Route path="/liste-des-emplois" element={<Emploi />} />
        <Route path="/detail-sur-emploi-selectionne" element={<InfoEmploi />} />
        <Route path="/profil-utilisateur" element={<Profil />} />
        <Route
          path="/conversation-entre-utilisateurs"
          element={<ConversationHistory />}
        />
        <Route path="/page-admin" element={<Admin />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Routes>
    </div>
  );
};

export default Routers;
