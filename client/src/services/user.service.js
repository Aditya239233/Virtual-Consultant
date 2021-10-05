import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/test/";

const getHomePage = () => {
  return axios.get(API_URL + "all");
};

const getFeed = () => {
  return axios.get(API_URL + "all", { headers: authHeader() });
};

const consultDoctor = () => {
  return axios.get(API_URL + "patient", { headers: authHeader() });
};

const getPatientsList = () => {
  return axios.get(API_URL + "doctor", { headers: authHeader() });
};

const getPostCreationPage = () => {
  return axios.get(API_URL + "doctor", { headers: authHeader() });
};

export default {
  getHomePage,
  getFeed,
  consultDoctor,
  getPatientsList,
  getPostCreationPage,
};
