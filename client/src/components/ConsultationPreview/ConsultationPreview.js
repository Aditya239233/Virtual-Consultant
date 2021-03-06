import React from "react";
import "./ConsultationPreview.css";
import { Button } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MessagePreview = (props) => {
  const handleAccept = () => {
    console.log(props.id);
    axios
      .post("/chat", {
        patientUsername: props.sender,
        doctorUsername: props.username,
        text: props.text + " " + "Severity level: " + props.severity_level,
        sender: props.sender,
      })
      .then((result) => {
        console.log(props.id)
        console.log(props);
        axios
          .delete("/acceptconsultationrequest", {
            data: {
              id: props.id,
            },
          })
          .then(() => {
            console.log("Consultation accepted")
            window.location.href = "http://localhost:3000/messenger";
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="messagePreview">
      <div className="previewMessageTop">
        <img className="messageImage" src="/assets/Person/Daryl.jpg" alt="" />
        <p className="name">{props.sender}</p>
      </div>
      <div className="messageBottom">
        <p className="previewMessageText">
          Type: {props.type}
          <br />
          Severity Level: {props.severity_level}
          <br />
          {props.text}
        </p>
        <p className="time">{props.timestamp}</p>
        <Button onClick={handleAccept}>Accept</Button>
      </div>
    </div>
  );
};

export default MessagePreview;
