import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link as LinkR, Redirect } from "react-router-dom";
import axios from "axios";

const SignUpDoctor = () => {
  const [signedUp, setSignedUp] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("/registerdoctor", data)
      .then((res) => {
        setSignedUp(true);
      })
      .catch((e) => console.log(e));
  };

  if (signedUp) {
    return <Redirect to="/login" />;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="first_name"
            required
            fullWidth
            id="first_name"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="specialization"
            label="specialization"
            name="specialization"
            autoComplete="specialization"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirm_password"
            label="confirm_password"
            type="confirm_password"
            id="confirm_password"
            autoComplete="confirm password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="Medical ID"
            label="medical_id"
            type="Medical ID"
            id="medical_id"
            autoComplete="ID History"
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <LinkR variant="body2" to="/signup">
            Want to join as a Patient instead? Click here.
          </LinkR>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpDoctor;
