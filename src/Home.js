import React from "react";
import "./Home.css";
import Stories from "./Stories";
import Posts from "./Posts";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__left">
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default Home;
