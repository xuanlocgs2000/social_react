import "./PostSide.scss";

import React from "react";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
