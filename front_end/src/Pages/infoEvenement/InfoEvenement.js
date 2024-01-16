import React from "react";
import DetailEvenement from "../../Components/detailEvenement/DetailEvenement";
import LeftBar from "../../Components/leftbar/LeftBar";
import AccueilMenu from "../../Components/menus/AccueilMenu";

const InfoEvenement = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <DetailEvenement />
      </div>
    </>
  );
};

export default InfoEvenement;
