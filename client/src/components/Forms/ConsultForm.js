import * as React from "react";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Attach from "../Attach/attach";
import axios from "axios"
const ConsultForm =  () => {
  const [severity,setSeverity]=useState("Choose option");
  const [type,setType]=useState("Choose option")
  const [text, setText]=useState(" ")
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("severity",severity) 
    console.log("type",type)
    const data = new FormData(event.currentTarget);
    const send_req= await axios.post("http://localhost:8000/sendconsultationrequest",{type: type,
    severity_level: severity,
    text:data.get("symptoms"),
    sender: "user2"})
    console.log("req",send_req)
    setSeverity("Choose option")
    setType("Choose option")
    setText("")
  };
 
  const handleChangeSeverity = (event)=>{
    setSeverity(event.target.value)
  }
  const handleChangeType=(event)=>{
    setType(event.target.value)
  }
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <label id="severe_level">
          Select Severity Level:
          <select value={severity} onChange={handleChangeSeverity} required>
            <option value="">Select Severity Level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        </Grid>
        <br/>
        <Grid item xs={12}>
        <label id="type">
          Select Type of Problem:
          <select value= {type} onChange={handleChangeType} required>
            <option value="">Select Problem Type</option>
            <option value="flu">Flu</option>
            <option value="heart disease">Heart Disease</option>
            <option value="mental">Mental Related</option>
            <option value="others">Others, please describe below</option>
          </select>
        </label>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="symptoms"
            label="Describe your Symptoms"
            type="symptoms"
            id="symptoms"
            autoComplete="symptoms"
            value={text}
            onChange={(e) =>{ setText(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit Request
      </Button>
    </Box>
  );
};

export default ConsultForm;
