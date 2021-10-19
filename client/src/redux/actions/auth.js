import { LOGIN_DOCTOR, LOGIN_PATIENT, LOGOUT } from "./type";
import axios from "axios";

export const login_doctor = (username, password) => async (dispatch) => {
  await axios
    .get("/logindoctor", {
      params: {
        username,
        password,
      },
    })
    .then((res) => {
      dispatch({
        type: LOGIN_DOCTOR,
        payload: username,
      });
    })
    .catch((e) => console.log(e));
};

export const login_patient = (username, password) => async (dispatch) => {
  await axios
    .get("/loginpatient", {
      params: {
        username,
        password,
      },
    })
    .then((res) => {
      dispatch({
        type: LOGIN_PATIENT,
        payload: username,
      });
    })
    .catch((e) => console.log(e));
};

export const logout = () => (dispatch) => {
  console.log("HEREE");
  dispatch({
    type: LOGOUT,
  });
};
