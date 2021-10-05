import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

const register = (
  username,
  email,
  password,
  account_type,
  firstName,
  lastName,
  medicalID,
  height,
  weight,
  medicalHistory
) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    account_type,
    firstName,
    lastName,
    medicalID,
    height,
    weight,
    medicalHistory,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
