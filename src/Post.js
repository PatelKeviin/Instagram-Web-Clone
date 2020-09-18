import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Post({ image, profile, title }) {
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__profile" src={profile} alt="" />
        <strong className="post__title">{title}</strong>
      </div>

      <div className="post__imageContainer">
        <img src={image} alt="" className="post__image" />
      </div>

      <div className="post__footer">
        <div className="post__footerLeft">
          <FavoriteBorderIcon style={{ fontSize: 31 }} />
          <img
            className="post__footerIcon"
            src={require("./images/profile-icon.PNG")}
            alt=""
          />
          <img
            className="post__footerIcon"
            src={require("./images/share-icon.PNG")}
            alt=""
          />
        </div>

        <div className="post__footerRight">
          <img
            className="post__footerIcon"
            src={require("./images/save-icon.PNG")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
