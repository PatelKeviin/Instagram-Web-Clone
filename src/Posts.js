import React from "react";
import "./Posts.css";
import Post from "./Post";

function Posts() {
  let titleData = ["reactjs_official", "reactjs_official"];

  let profileData = [
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-67b35.appspot.com/o/profiles%2Freactjs-profile.png?alt=media&token=eeeee74e-f2fd-4f8f-95fd-b8d9c512f3a5",
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-67b35.appspot.com/o/profiles%2Freactjs-profile.png?alt=media&token=eeeee74e-f2fd-4f8f-95fd-b8d9c512f3a5"
  ];

  let postsData = [
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-67b35.appspot.com/o/posts%2Freactjs.PNG?alt=media&token=cd3c8f71-9723-435e-be9d-ef8f3b1ab268",
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-67b35.appspot.com/o/posts%2Freactjs.PNG?alt=media&token=cd3c8f71-9723-435e-be9d-ef8f3b1ab268"
  ];

  return (
    <div className="posts">
      {postsData.map((post, index) => (
        <Post
          key={index}
          title={titleData[index]}
          image={post}
          profile={profileData[index]}
        />
      ))}
    </div>
  );
}

export default Posts;
