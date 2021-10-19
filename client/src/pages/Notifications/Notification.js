import React, { useState, useEffect } from "react";
import "./notification.css";
import Navbar from "../../components/Navbar/Navbar";
import ConsultationPreview from "../../components/ConsultationPreview/ConsultationPreview";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Notification = ({ auth: { user } }) => {
  const [consultationRequests, setConsultationRequests] = useState([]);
  const username = user.username;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const info = await axios.get("/viewdoctorprofile", {
      params: {
        username: username,
      },
    });
    const specialization = info.data.specialization;
    axios
      .get("http://localhost:8000/viewNotifications", {
        params: {
          type: specialization,
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
        <div className="activeChat">
          <div className="activeChatWrapper">
            {consultationRequests.map((request) => {
              console.log(request._id);
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

Notification.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Notification);
