import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SeverityForm from "../DropDown/severe";
import TypeOPForm from "../DropDown/type";
import Attach from "../Attach/attach";
import axios from "axios"

const ConsultForm =  () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("type"));
    const send_req= await axios.post("http://localhost:8000/sendconsultationrequest",{params:{type: data.get("type"),
    severity_level: data.get("severe_level"),
    text:data.get("symptoms"),
    sender: "user1",
    acceptor: "user2",
    timestamp: "2020-02-01"}})
    console.log("req",send_req)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <label id="severe_level">
          Select Severity Level:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        </Grid>
        <Grid item xs={12}>
        <label id="type">
          Select Type of Problem:
          <select value={this.state.value} onChange={this.handleChange}>
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
          />
        </Grid>
        <Grid item xs={12}>
          <Attach />
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
