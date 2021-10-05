import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SeverityForm from "../DropDown/severe";
import TypeOPForm from "../DropDown/type";
import Attach from "../Attach/attach";

const ConsultForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SeverityForm />
        </Grid>
        <Grid item xs={12}>
          <TypeOPForm />
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
