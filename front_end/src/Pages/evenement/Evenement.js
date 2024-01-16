import React from "react";
import ListEvenement from "../../Components/listEvenement/ListEvenement";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";

const Evenement = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <ListEvenement />
      </div>
    </>
  );
};

export default Evenement;
