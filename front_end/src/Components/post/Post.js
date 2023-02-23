import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../Styles/post.css";

const Post = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    // try {
    //   axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    // } catch (err) {}
    // setLike(isLiked ? like - 1 : like + 1);
    // setIsLiked(!isLiked);
  };
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              eaque culpa alias repellendus inventore ipsum.
              {/* <Link to={`/profile/${user.username}`}>
          <img
            className="postProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
        </Link> */}
              {/* <span className="postUsername">{user.username}</span>
        <span className="postDate">{format(post.createdAt)}</span> */}
            </div>
            <div className="postTopRight">
              <MoreVertIcon />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={PF + post.img} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={`${PF}like.png`}
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src={`${PF}heart.png`}
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{"like"} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
