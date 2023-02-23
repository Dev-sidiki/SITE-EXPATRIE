import React from "react";
import { useState } from "react";
import Post from "../post/Post";

import "../../Styles/feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState(["a", "b", "c"]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === user.username) && <Share />} */}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
