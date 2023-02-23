import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import defaultImage from "../../Assets/images/image_vide.jpg";

import "../../Styles/accueilMenu.css";

const AccueilMenu = () => {
  return (
    <div className="AcceuilTopbarContainer">
      <div className="AcceuilTopbarLeft">
        <span className="logo">
          Guid<span>Expat</span>
        </span>
      </div>
      <div className="accueilTopbarCenter">
        <div className="accueilSearchbar">
          <SearchIcon className="accueilSearchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="accueilSearchInput"
          />
        </div>
      </div>
      <div className="accueilTopbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="accueilTopbarIcons">
          <div className="accueilTopbarIconItem">
            <PersonIcon />
            <span className="accueilTopbarIconBadge">1</span>
          </div>
          <div className="accueilTopbarIconItem">
            <ChatIcon />
            <span className="accueilTopbarIconBadge">2</span>
          </div>
          <div className="accueilTopbarIconItem">
            <NotificationsIcon />
            <span className="accueilTopbarIconBadge">1</span>
          </div>
        </div>
        <img src={defaultImage} alt="" className="accueilTopbarImg" />
      </div>
    </div>
  );
};

export default AccueilMenu;
