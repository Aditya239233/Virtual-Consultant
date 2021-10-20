import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ConsultForm from "../../components/Forms/ConsultForm";
import { LocalHospitalRounded } from "@material-ui/icons";
const theme = createTheme();

const Consult = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LocalHospitalRounded />
          <Typography component="h1" variant="h5">
            Consultation Form
          </Typography>
          <ConsultForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Consult;
