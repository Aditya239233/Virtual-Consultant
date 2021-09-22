import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link as LinkR } from "react-router-dom";

const SignUpDoctor = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
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
            name="Re-password"
            label="Re-Password"
            type="Re-password"
            id="Re-password"
            autoComplete="Re-new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="Medical ID"
            label="Medical ID"
            type="Medical ID"
            id="Medical ID"
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
