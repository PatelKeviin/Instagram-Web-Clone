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
    new Story("./images/stories/story3.PNG", "lousivutton")
    // new Story("./images/stories/story4.PNG", "dualipa"),
    // new Story("./images/stories/story5.PNG", "worldstar")
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

  return <div className="stories">{stories}</div>;
}

export default Stories;
