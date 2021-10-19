import React, { useState, useEffect } from "react";
import "./notification.css";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import ConsultationPreview from "../../components/ConsultationPreview/ConsultationPreview";
import Message from "../../components/Message/Message";
import axios from "axios";
const Notification = () => {
  const [consultationRequests, setConsultationRequests] = useState([]);
  const [username, setUsername] = useState("try");

  useEffect(async() => {
      const info = await axios.get("/viewdoctorprofile",{params: {
        username: username,
        },});
        const specialization=info.data.specialization;
    axios
      .get("http://localhost:8000/viewNotifications", {
        params: {
          type:"Gynaecology",
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setConsultationRequests(response.data.consultation_requests);
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
        {/* <div className="chatMenu">
          <div className="chatMenuWrapper">
            <SideMenu />
          </div>
        </div> */}
        <div className="activeChat">
          <div className="activeChatWrapper">
            {consultationRequests.map((request) => {
              console.log(request._id)
              return (
                <ConsultationPreview
                  id={request._id}
                  severity_level={request.severity_level}
                  type={request.type}
                  sender={request.sender}
                  text={request.text}
                  timestamp={request.timestamp}
                />
                
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
