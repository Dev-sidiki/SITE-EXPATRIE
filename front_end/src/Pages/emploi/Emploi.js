import React from "react";
import ListEmploi from "../../Components/listEmploi/ListEmploi";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";

const Emploi = () => {
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <ListEmploi />
      </div>
    </>
  );
};

export default Emploi;
