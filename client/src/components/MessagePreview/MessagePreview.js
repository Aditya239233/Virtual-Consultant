import React from "react";
import "./messagePreview.css";

export default function MessagePreview() {
  return (
    <div className="messagePreview">
      <div className="previewMessageTop">
        <img
          className="messageImage"
          src="/assets/Person/Daryl passport.jpg"
          alt=""
        />
        <p className="name">Joceline</p>
      </div>
      <div className="messageBottom">
        <p className="previewMessageText">
          Hi do you have financial insurance. Fear not! My name is joceline and
          i will, to the best of my abilities, meet all your needs!
        </p>
        <p className="time">01/10/2021</p>
      </div>
    </div>
  );
}
