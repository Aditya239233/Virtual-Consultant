import React, { useState, useEffect } from "react";
import "./messenger.css";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import Message from "../../components/Message/Message";
import axios from "axios";
const Messenger = () => {
  const [previews, setPreviews] = useState([]);
  const [username, setUsername] = useState("Shruthi");

  useEffect(() => {
    axios
      .get("http://localhost:8000/retrieveAllConversationPartners", {
        params: {
          username: username,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPreviews(response.data.chat_partners);
      })
      .catch((err) => {
        console.log("Error happened");
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <SideMenu />
          </div>
        </div>
        <div className="activeChat">
          <div className="activeChatWrapper">
            {previews.map((preview) => {
              return (
                <MessagePreview
                  id={preview.timestamp}
                  name={preview.name}
                  sender={preview.sender}
                  timestamp={preview.timestamp}
                  preview_text={preview.preview_text}
                  username={username}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
