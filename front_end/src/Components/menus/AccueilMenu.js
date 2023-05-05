import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import defaultImage from "../../Assets/images/image_vide.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "../../Styles/accueilMenu.css";

const AccueilMenu = () => {
  return (
    <div className="AcceuilTopbarContainer">
      <div className="AcceuilTopbarLeft">
        <span className="logo">
          Viv<span>Exp@t</span>
        </span>
        {/* <i class="home icon"></i>Accueil */}
      </div>
      <div className="accueilTopbarRight">
        <div className="accueilTopbarIcons">
          <div className="accueilTopbarIconItem">
            <span className="accueilTopbarIcon">
              {" "}
              <HomeIcon />
            </span>
            <span className="accueilTopbarIconName">Accueil</span>
          </div>
          {/* <div className="accueilTopbarIconItem">
            <span className="accueilTopbarIcon">
              {" "}
              <SearchIcon />
            </span>
            <span className="accueilTopbarIconName">Recherche</span>
          </div> */}

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
              <NotificationsIcon />
            </span>
            <span className="accueilTopbarIconBadge">1</span>
            <span className="accueilTopbarIconName">Notification</span>
          </div>
        </div>
        <div className="accueilTopbarIconItem-2">
          <img src={defaultImage} alt="" className="accueilTopbarImg" />{" "}
          <span>Profil</span>
        </div>
        <div className="accueilTopbarIconItem-2">
          <MoreVertIcon />
          Plus
        </div>
      </div>
    </div>
  );
};

export default AccueilMenu;
