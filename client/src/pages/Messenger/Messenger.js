import React, { useState, useEffect } from "react";
import "./messenger.css";
import Navbar from "../../components/Navbar/Navbar";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Messenger = ({ auth: { user } }) => {
  const [previews, setPreviews] = useState([]);
  const username = user.username;

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
        <div className="activeChat">
          <div className="activeChatWrapper">
            {previews.length
              ? previews.map((preview) => {
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
                })
              : "No Chat Found"}
          </div>
        </div>
      </div>
    </>
  );
};

Messenger.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Messenger);
