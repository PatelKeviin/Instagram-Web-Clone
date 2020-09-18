import React from "react";
import "./Stories.css";

function Stories() {
  // fetching stories data
  function Story(imagePath, title) {
    this.imagePath = imagePath;
    this.title = title;
  }

  const stories = [
    new Story("./images/stories/story1.PNG", "conspiracyplots"),
    new Story("./images/stories/story2.PNG", "calvinharis"),
    new Story("./images/stories/story3.PNG", "lousivutton"),
    new Story("./images/stories/story4.PNG", "dualipa"),
    new Story("./images/stories/story5.PNG", "worldstar"),
    new Story("./images/stories/story1.PNG", "conspiracyplots"),
    new Story("./images/stories/story2.PNG", "calvinharis"),
    new Story("./images/stories/story3.PNG", "lousivutton"),
    new Story("./images/stories/story4.PNG", "dualipa"),
    new Story("./images/stories/story5.PNG", "worldstar")
  ].map((story, index) => (
    <div key={index} className="stories__story">
      <img
        className="stories__image"
        src={require(`${story.imagePath}`)}
        alt=""
      />
      <small className="stories__title">{story.title}</small>
    </div>
  ));

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function() {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="stories">
      <img
        className="stories_scrollLeft stories__scrollImage"
        src={require("./images/insta-scroll.png")}
        alt=""
        onClick={function(evt) {
          sideScroll(
            document.querySelector(".stories__container"),
            "left",
            20,
            120,
            4
          );
        }}
      />
      <div className="stories__container">{stories}</div>
      <img
        className="stories_scrollRight stories__scrollImage"
        src={require("./images/insta-scroll-right.png")}
        alt=""
        onClick={function(evt) {
          sideScroll(
            document.querySelector(".stories__container"),
            "right",
            20,
            120,
            4
          );
        }}
      />
    </div>
  );
}

export default Stories;
