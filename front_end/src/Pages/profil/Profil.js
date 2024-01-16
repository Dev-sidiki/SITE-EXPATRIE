import React from "react";
import Posts from "../../Components/posts/Posts";

import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";
import Rightbar from "../../Components/rightbar/RightBar";

import "../../Styles/scss/accueil.scss";
const Profil = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <Posts />
        <Rightbar />
      </div>
    </>
  );
};

export default Profil;
