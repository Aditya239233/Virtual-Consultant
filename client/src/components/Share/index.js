import * as React from "react";
import "./index.css";
import axios from "axios";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Share = ({ auth: { user } }) => {
  const [formData, setFormData] = React.useState({
    username: user.username,
    id: uuid(),
    desc: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (event) => {
    const data = formData;
    data.id = uuid();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/createpost", data, config)
      .then((res) => {
        console.log(res);
        alert("New Post Created");
        window.location.reload(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/Picture1.jpg" alt="" />
          <input
            id="desc"
            label="desc"
            name="desc"
            placeholder="What's in your mind"
            className="shareInput"
            onChange={(e) => onChange(e)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <input
            type="file"
            id="attachment"
            label="attachment"
            name="attachment"
            // onChange={(e) => onChange(e)}
            required
          ></input>
          <button className="shareButton" onClick={handlePost}>
            {" "}
            Share{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

Share.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Share);
