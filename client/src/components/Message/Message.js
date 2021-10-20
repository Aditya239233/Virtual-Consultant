import React from "react";
import "./message.css";

export default function Message(props) {
  const messageClass = props.username === props.sender ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={"https://api.adorable.io/avatars/23/abott@adorable.png"} />
        <p>{props.text}</p>
      </div>
    </>
  );
}
