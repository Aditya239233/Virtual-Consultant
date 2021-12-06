import React from "react";
import "./chat.css";
import { KeyboardReturn, Call, Videocam } from "@material-ui/icons";

import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import Message from "../../components/Message/Message";

const Chat = () => {
  return (
    <>
      <Navbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <SideMenu />
          </div>
        </div>
        <div className="chatBody">
          <div className="chatHeader">
            <div className="chatHeaderWrapper">
              <div className="person">
                <div className="back">
                  <KeyboardReturn />
                </div>
                <img
                  className="profilePhoto"
                  src="/assets/Post/Passport photo.jpg"
                  alt=""
                />
                <p className="name">
                  Dr. John Tan
                  <p className="medicalID">Medical ID: 123456789</p>
                </p>

                <div className="videoIcon">
                  <Videocam style={{ fontSize: 35 }} />
                </div>
                <div className="callIcon">
                  <Call style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>

          {/* /* active chat */}
          <div className="chatWrapperReceive">
            <Message own={true} />
            <Message />
          </div>
          <div className="chatWrapperSend">
            <Message />
          </div>
        </div>
      </div>
      <div className="chatBottom">
        <textarea
          className="chatMessageInput"
          placeholder="write something ..."
        ></textarea>
        <button className="chatSubmitButton">Send</button>
      </div>
    </>
  );
};

export default Chat;
