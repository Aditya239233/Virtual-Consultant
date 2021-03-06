import React, { useState, useEffect, useRef } from "react";
import "./liveChat.css";
import Navbar from "../../components/Navbar/Navbar";
import { KeyboardReturn, Call, Videocam } from "@material-ui/icons";
import Message from "../../components/Message/Message";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const LiveChat = (props) => {
  const userProps = props.location.userProps;
  console.log(userProps);
  const [chats, setChats] = useState([]);
  const username = userProps.user;
  const partner = userProps.partner;
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log(message);
    const newMessage = {
      patientUsername: username,
      doctorUsername: partner,
      text: message,
      sender: username,
      timestamp: Date.now(),
    };
    axios
      .post("http://localhost:8000/chat", newMessage)
      .then((result) => {
        console.log(result.data);
        const newChats = chats.concat(newMessage);
        setChats(newChats);
        setMessage("");
      })
      .catch((error) => {
        console.log("Error happened");
        console.log(error);
      });
  };

  const handleVideocall = () => {
    console.log("Videocalling now");
    window.open("http://localhost:8000/video");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/retrieveConversation", {
        params: {
          username1: username,
          username2: partner,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setChats(response.data.chat_messages);
      })
      .catch((err) => {
        console.log("Error happened");
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="b">
          <div className="c">
            <div className="backButton">
              {/* <KeyboardReturn style={{ fontSize: 35 }} /> */}
              <IconButton href="/messenger" color="primary">
                <KeyboardReturn style={{ fontSize: 35 }} />
              </IconButton>
            </div>
            <div className="chatPerson">
              <p className="chatName">{partner}</p>
            </div>
            <div className="videoButton">
              <IconButton onClick={handleVideocall} color="primary">
                <Videocam style={{ fontSize: 35 }} />
              </IconButton>
            </div>
          </div>
          <div className="d">
            {chats.map((chat) => {
              return (
                <div
                  className={
                    chat.sender == username ? "chatSend" : "chatReceive"
                  }
                >
                  {console.log("USERNAME", username, chat.sender)}
                  <Message
                    sender={chat.sender}
                    text={chat.text}
                    timestamp={chat.timestamp}
                    username={username}
                  />
                </div>
              );
            })}
          </div>
          <div className="e">
            <input
              className="chatInputBox"
              placeholder="Write something here...."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></input>
            <button
              className="sendButton"
              onClick={handleSend}
              disabled={!message}
            >
              <p className="Send">Send</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
