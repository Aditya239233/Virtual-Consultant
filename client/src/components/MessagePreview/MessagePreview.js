import React from "react";
import "./messagePreview.css";
import { Link } from "react-router-dom";

export default function MessagePreview(props) {
  return (
    <div className="messagePreview">
      <div className="previewMessageTop">
        <img className="messageImage" src="/assets/Person/Daryl.jpg" alt="" />
        <p className="name">{props.name}</p>
      </div>
      <div className="messageBottom">
        <p className="previewMessageText">
          {props.sender === props.username ? "You" : props.sender} :{" "}
          {props.preview_text}
        </p>
        <p className="time">{props.timestamp}</p>
        <Link
          to={{ pathname: "/livechat", userProps: { partner: props.name } }}
          className="btn btn-primary"
        >
          View chat
        </Link>
      </div>
    </div>
  );
}
