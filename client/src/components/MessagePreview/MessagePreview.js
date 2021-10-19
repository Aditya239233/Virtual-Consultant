import React from "react";
import "./messagePreview.css";

export default function MessagePreview(props) {
  return (
    <div className="messagePreview">
      <div className="previewMessageTop">
        <img className="messageImage" src="/assets/Person/Daryl.jpg" alt="" />
        <p className="name">{props.name}</p>
      </div>
      <div className="messageBottom">
        <p className="previewMessageText">
          {props.sender == props.username ? "You" : props.sender} :{" "}
          {props.preview_text}
        </p>
        <p className="time">{props.timestamp}</p>
      </div>
    </div>
  );
}
