import React from "react";
import "./Header.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo__container">
          <img
            className="header__logo"
            src={require("./images/instagram-header-logo.png")}
            alt=""
          />
        </div>

        <div className="header__search">
          <input
            type="text"
            className="header__searchBar"
            placeholder="&#xF002; Search"
          />
        </div>

        <div className="header__nav">
          <img
            className="header__home header__navLogo"
            src={require("./images/home.png")}
            alt=""
          />
          <img
            className="header__navLogo"
            src={require("./images/home.png")}
            alt=""
          />
          <img
            className="header__navLogo"
            src={require("./images/home.png")}
            alt=""
          />
          <img
            className="header__navLogo"
            src={require("./images/home.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
