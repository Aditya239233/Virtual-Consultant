import "./index.css";
import React from "react";
import Header from "../../components/Profile/DoctorHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import pic from "./doctor_icon.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Profile = ({ auth: { user } }) => {
  const [data, setData] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const info = await axios.get("/viewdoctorprofile", {
      params: {
        username: user.username,
      },
    });
    setData(info.data);
  }, []);
  console.log("info", data);
  return (
    <div className="index-header">
      <Header />
      <img src={pic} width="180" height="180" />
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Grid item xs={1}>
          <b>First Name:</b>
        </Grid>
        <Grid item xs={1}>
          {data["first_name"]}
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Grid item xs={1}>
          <b>Last Name:</b>
        </Grid>
        <Grid item xs={1}>
          {data["last_name"]}
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Grid item xs={1}>
          <b>Email:</b>
        </Grid>
        <Grid item xs={1}>
          {data["email"]}
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Grid item xs={1}>
          <b>UserName:</b>
        </Grid>
        <Grid item xs={1}>
          {data["username"]}
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Grid item xs={1}>
          <b>Medical Id:</b>
        </Grid>
        <Grid item xs={1}>
          {data["medical_id"]}
        </Grid>
      </Grid>
    </div>
  );
};
Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Profile);
