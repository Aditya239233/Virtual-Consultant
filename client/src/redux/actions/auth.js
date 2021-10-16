import { LOGIN_DOCTOR, LOGIN_PATIENT } from "./type";
import axios from "axios";

export const login_doctor = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });
  await axios
    .get("/logindoctor", body)
    .then((res) => {
      dispatch({
        type: LOGIN_DOCTOR,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};

export const login_patient = (username, password) => async (dispatch) => {
  const body = JSON.stringify({ username, password });
  await axios
    .get("/loginpatient", {
      params: {
        username,
        password,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_PATIENT,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};
