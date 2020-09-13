import React from "react";
import "./Home.css";
import Stories from "./Stories";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__left">
          <Stories />
        </div>
      </div>
    </div>
  );
}

export default Home;
