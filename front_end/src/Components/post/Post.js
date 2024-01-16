// import React from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link } from "react-router-dom";
import Comment from "../comments/Comment";
import DeleteCard from "../deleteCard/DeleteCard";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import "../../Styles/scss/post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  //TEMPORARY
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <DropdownButton
            id="dropdown-item-button"
            drop="center"
            variant="secondary"
            size="sm"
            title={<MoreHorizIcon />}
          >
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item as="button">
              <UpdateIcon />
              Modifier
            </Dropdown.Item>
            <Dropdown.Item as="button">
              <DeleteIcon />
              Supprimer
            </Dropdown.Item>
            <Dropdown.Item as="button">
              {" "}
              <ArchiveIcon />
              Archiver
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <div className="info">
            <div className="item">
              10
              {liked ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
              <span>Apprecier</span>
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              12 <TextsmsOutlinedIcon />
              <span>Commenter</span>
            </div>
            <div className="item">
              5<ShareOutlinedIcon />
              <span>Partager</span>
            </div>
          </div>
        </div>
        {commentOpen && <Comment />}
      </div>
    </div>
  );
};

export default Post;
