// importation des modules necessaire
import React from "react";
import { Routes, Route } from "react-router-dom";

// importation des differentes pages de notre application
import Page1 from "../../Pages/Page1.js";
import Page2 from "../../Pages/Page2.js";
import Page3 from "../../Pages/Page3.js";

// imporation du menu de navigation
import Navigation from "../Navigation";

// le composant qui contient les routes vers nos
// differentres pages
const Routers = () => {
  return (
    <div>
      {/* menu de navigation */}
      <Navigation />

      {/* les routes */}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default Routers;
