import React from "react";

import { Users } from "../../data/data.js";

import Emploi from "../../Assets/images/job2.png";
import Recherce from "../../Assets/images/recherche_2.png";
import Article from "../../Assets/images/article3.jpg";
import Abonnement from "../../Assets/images/abonnement.jpg";
import Groups from "../../Assets/images/2.png";
import Market from "../../Assets/images/3.png";
import Events from "../../Assets/images/6.png";
import Aide from "../../Assets/images/aide.png";
import Home from "../../Assets/images/home.jpg";
import Deconnexion from "../../Assets/images/deconnexion2.jpg";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../../Styles/scss/leftBar.scss";
const LeftBar = () => {
  function TriggerExample({ menuTitle, menuIcon }) {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {menuTitle}
      </Tooltip>
    );

    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <img src={menuIcon} alt="" className="other-item" />
      </OverlayTrigger>
    );
  }
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <TriggerExample menuTitle={"Recherce"} menuIcon={Recherce} />
          <div className="item-3">
            <img src={Recherce} alt="" />
            <span className="ajuste-marge">Recherche</span>
          </div>
          <span className="menu-title">MENU</span>
          <TriggerExample menuTitle={"accueil"} menuIcon={Home} />
          <div className="item">
            <img src={Home} alt="" />
            <span className="ajuste-marge">Accueil</span>
          </div>
          <TriggerExample menuTitle={"Emploi"} menuIcon={Emploi} />
          <div className="item">
            <img src={Emploi} alt="" />
            <span className="ajuste-marge">Emploi</span>
          </div>
          <TriggerExample menuTitle={"Évènement"} menuIcon={Events} />
          <div className="item">
            <img src={Events} alt="" />
            <span>Évènement</span>
          </div>
          <TriggerExample menuTitle={"Article"} menuIcon={Article} />
          <div className="item">
            <img src={Article} alt="" />
            <span className="ajuste-marge">Article</span>
          </div>
          <TriggerExample menuTitle={"Communauté"} menuIcon={Groups} />
          <div className="item">
            <img src={Groups} alt="" />
            <span>Communauté</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span className="menu-title">SERVICE</span>
          <TriggerExample menuTitle={"ExpatMarché"} menuIcon={Market} />
          <div className="item">
            <img src={Market} alt="" />
            <span>ExpatMarché</span>
          </div>
          <TriggerExample menuTitle={"Abonnement"} menuIcon={Abonnement} />
          <div className="item">
            <img src={Abonnement} alt="" />
            <span>Abonnement</span>
          </div>
          <TriggerExample menuTitle={"Besoin d'aide"} menuIcon={Aide} />
          <div className="item">
            <img src={Aide} alt="" />
            <span>Besoin d'aide</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <TriggerExample menuTitle={"Déconnexion"} menuIcon={Deconnexion} />
          <div className="item-2">
            <img src={Deconnexion} alt="" />
            <span>Déconnexion</span>
          </div>
          <div className="item">
            <button className="sidebarButton">DECONNEXION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
