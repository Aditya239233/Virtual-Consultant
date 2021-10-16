import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Link as LinkR, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { login_doctor, login_patient } from "../../redux/actions/auth";

const LoginForm = ({ auth: { isLoggedIn } }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    account_type: "Patient",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (!e.target.name) e.target.name = "account_type";
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = formData;
    if (data.account_type === "Patient") {
      console.log("hello");
      dispatch(login_patient(data.username, data.password));
    } else {
      console.log("bye");
      dispatch(login_doctor(data.username, data.password));
    }
  };

  if (isLoggedIn) return <Redirect to="/feed"></Redirect>;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Box noValidate sx={{ mt: 1 }}>
        <Select
          labelId="account_type"
          id="account_type"
          label="account_type"
          defaultValue="Patient"
          onChange={(e) => onChange(e)}
        >
          <MenuItem value="Patient">Patient</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
        </Select>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => onChange(e)}
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
          onChange={(e) => onChange(e)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
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
    </form>
  );
};

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(LoginForm);
