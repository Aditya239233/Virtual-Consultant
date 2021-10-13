import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

const register_doctor = (
  email,
  username,
  medical_id,
  password,
  first_name,
  last_name,
  confirm_password,
  specialization
) => {
  console.log("YOO");
  const body = JSON.stringify({
    email,
    username,
    medical_id,
    password,
    first_name,
    last_name,
    confirm_password,
    specialization,
  });
  return axios.post("/registerdoctor", body);
};

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

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", {
    username,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register_doctor,
  register,
  login,
  logout,
};
