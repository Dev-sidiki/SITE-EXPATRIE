import React from "react";

import { Users } from "../../data/data.js";

import RssFeedIcon from "@mui/icons-material/RssFeed.js";
import ChatIcon from "@mui/icons-material/Chat.js";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite.js";
import GroupIcon from "@mui/icons-material/Group.js";
import BookmarkIcon from "@mui/icons-material/Bookmark.js";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline.js";
import EventIcon from "@mui/icons-material/Event.js";
import SchoolIcon from "@mui/icons-material/School.js";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline.js";

import CloseFriend from "../closeFriend/CloseFriend.js";

import "../../Styles/leftbar.css";

const LeftBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledWhiteIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BookmarkIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutlineIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">DECONNEXION</button>
          <hr className="sidebarHr" />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
