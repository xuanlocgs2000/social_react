import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSlide from "../../components/profileSlide/ProfileSlide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSlide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
