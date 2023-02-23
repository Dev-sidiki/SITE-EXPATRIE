import React from "react";
import Feed from "../../Components/feed/Feed";
import LeftBar from "../../Components/leftbar/LeftBar";

import AccueilMenu from "../../Components/menus/AccueilMenu";
import RightBar from "../../Components/rightbar/RightBar";

import "../../Styles/accueil.css";

const Acceuil = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
      <br />
    </>
  );
};

export default Acceuil;
