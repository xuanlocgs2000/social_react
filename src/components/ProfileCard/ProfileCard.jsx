import "./ProfileCard.scss";
import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" className="bg-img" />
        <img src={Profile} alt="" className="avatar-img" />
      </div>
      <div className="ProfileName">
        <span className="user-name">Spacety</span>
        <span className="tag-name">Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div className="follow-container">
          <div className="follow">
            <span>218</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>21</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span className="myprofile">My profile</span>}
    </div>
  );
};

export default ProfileCard;
