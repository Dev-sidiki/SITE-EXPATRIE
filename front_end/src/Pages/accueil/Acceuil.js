import React from "react";
import Share from "../../Components/share/Share";
import Posts from "../../Components/posts/Posts";
// import "../../Styles/css/accueil.css";
import "../../Styles/scss/accueil.scss";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";
import Rightbar from "../../Components/rightbar/RightBar";

const Acceuil = () => {
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

export default Acceuil;
