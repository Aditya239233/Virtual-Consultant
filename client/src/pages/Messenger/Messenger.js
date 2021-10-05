import React from "react";
import "./messenger.css";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import MessagePreview from "../../components/MessagePreview/MessagePreview";

const Messenger = () => {
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
            <MessagePreview />
            <MessagePreview />
            <MessagePreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
