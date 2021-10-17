import React from "react";
import "./message.css";

export default function Message(props) {
  return (
    <>
      <div className="message">
        <div className="messageTop">
          <p className="sender">
          {props.sender==props.username? "You":props.sender} <br />
          </p>
          <p className="defaultMsg">{ props.text }</p>
        </div>
        <div className="messageDateTime">
          <div className="messageDate">{ props.timestamp }</div>
        </div>
      </div>
    </>
  );
}
