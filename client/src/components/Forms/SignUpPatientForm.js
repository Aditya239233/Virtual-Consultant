import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link as LinkR, Redirect } from "react-router-dom";
import axios from "axios";

const SignUpPatient = () => {
  const [signedUp, setSignedUp] = React.useState(false);
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    allergies: "",
    confirm_password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = formData;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/registerpatient", data, config)
      .then((res) => {
        if (res.status == 200) setSignedUp(true);
      })
      .catch((e) => console.log(e));
  };

  if (signedUp) {
    return <Redirect to="/login" />;
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <Box component="" noValidate sx={{ mt: 1 }}>
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
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirm_password"
              label="confirm_password"
              type="password"
              id="confirm_password"
              autoComplete="Re-new-password"
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="height"
              label="Height(m)"
              name="height"
              autoComplete="height"
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="weight"
              label="weight(kg)"
              name="weight"
              autoComplete="weight"
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="allergies"
              label="allergies"
              type="Medical History"
              id="allergies"
              autoComplete="Medical History"
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <LinkR variant="body2" to="/signupDoctor">
              Want to join as a Doctor instead? Click here.
            </LinkR>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default SignUpPatient;
