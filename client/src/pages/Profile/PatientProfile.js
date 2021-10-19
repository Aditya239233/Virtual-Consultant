import './index.css'
import React from 'react'
import Header from "../../components/Profile/PatientHeader"
import axios from "axios"
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import pic from "./profile_pic.png"
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Profile = ({ auth: { user } }) =>{
    const [data,setData]=useState({})
    useEffect(async ()=>{
        const info = await axios.get("/viewpatientprofile",{params: {
        username: user.username,
        },});
        setData(info.data);
    },[]);
    console.log("info",data)
    return (
    <div className="index-header">
            <Header/>
            <img src={pic} width="180" height="180"/>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>First Name:</b>
                </Grid>
                <Grid item xs={1}>
                {data["first_name"]}
                </Grid>
                
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Last Name:</b>
                </Grid>
                <Grid item xs={1}>
                {data["last_name"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Email:</b>
                </Grid>
                <Grid item xs={1}>
                {data["email"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>UserName:</b>
                </Grid>
                <Grid item xs={1}>
                {data["username"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Age:</b>
                </Grid>
                <Grid item xs={1}>
                {data["age"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Weight:</b>
                </Grid>
                <Grid item xs={1}>
                {data["weight"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Height:</b>
                </Grid>
                <Grid item xs={1}>
                {data["height"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>BMI:</b>
                </Grid>
                <Grid item xs={1}>
                {data["bmi"]}
                </Grid>
            </Grid>
            <Grid container style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingTop:10}}>
                <Grid item xs={1}>
                    <b>Allergies:</b>
                </Grid>
                <Grid item xs={1}>
                {data["allergies"]}
                </Grid>
            </Grid>
          <br />
          </div>
      );
}
Profile.propTypes = {
    auth: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {})(Profile);