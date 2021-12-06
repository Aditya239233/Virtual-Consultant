import React from "react";
import "./sidemenu.css";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <div className="text">Menu</div>
      <div className="menuPost">Post</div>
      <div className="menuConsultation">Consultation</div>
      <div className="menuChats">Chats</div>
      <div className="menuSearch">Search</div>
    </div>
  );
}
