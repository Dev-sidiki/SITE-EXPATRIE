import React from "react";
import LeftBar from "../../Components/leftbar/LeftBar";
import RightBar from "../../Components/rightbar/RightBar";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import Feed from "../../Components/feed/Feed";

const Profil = () => {
  return (
    <>
      <AccueilMenu />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
