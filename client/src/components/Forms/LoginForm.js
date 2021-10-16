import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.getAll());
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="account_type"
        defaultValue="Patient"
      >
        <MenuItem value="Patient">Patient</MenuItem>
        <MenuItem value="Doctor">Doctor</MenuItem>
      </Select>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <LinkR variant="body2" to="/consult">
            Forgot password?
          </LinkR>
        </Grid>
        <Grid item>
          <LinkR variant="body2" to="/signup">
            {"Don't have an account? Sign Up"}
          </LinkR>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
