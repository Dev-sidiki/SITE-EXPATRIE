import React from "react";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";
import DetailEmploi from "../../Components/detailEmploi/DetailEmploi";
const InfoEmploi = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <DetailEmploi />
      </div>
    </>
  );
};

export default InfoEmploi;
