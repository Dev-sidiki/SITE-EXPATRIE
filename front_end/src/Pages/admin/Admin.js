import React from "react";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";
import AdminDashboard from "../../Components/adminDashboard/AdminDashboard";

import "../../Styles/scss/accueil.scss";

const Admin = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <AdminDashboard />
      </div>
    </>
  );
};

export default Admin;
