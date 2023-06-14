import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import defaultImage from "../../Assets/images/image_vide.jpg";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../../Styles/scss/menu_accueil.scss";

const AccueilMenu = () => {
  const options = [
    {
      name: "Notifications",
      scroll: false,
      backdrop: true,
      placement: "end",
    },
  ];
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
      <>
        <div onClick={toggleShow} className="me-2">
          {name}
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            Viv<span>Exp@t</span>
          </span>
        </Link>
      </div>
      <div className="right">
        <div className="accueilTopbarIconItem">
          <span className="accueilTopbarIcon">
            {" "}
            <ChatIcon />
          </span>
          <span className="accueilTopbarIconBadge">2 </span>
          <span className="accueilTopbarIconName">Messages</span>
        </div>
        <div className="accueilTopbarIconItem">
          <span className="accueilTopbarIcon">
            {" "}
            {<NotificationsOutlinedIcon />}
          </span>
          <span className="accueilTopbarIconBadge">1</span>
          <span className="accueilTopbarIconName">
            {" "}
            {options.map((props, idx) => (
              <OffCanvasExample key={idx} {...props} />
            ))}
          </span>
        </div>
        <div className="user">
          <img src={defaultImage} alt="" className="accueilTopbarImg" />{" "}
          <span>Profil</span>
        </div>
        {/* {darkMode ? (
        <WbSunnyOutlinedIcon onClick={toggle} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggle} />
      )} */}
        <div className="mode">
          <WbSunnyOutlinedIcon />
          <span> Mode</span>
        </div>
      </div>
    </div>
  );
};

export default AccueilMenu;
