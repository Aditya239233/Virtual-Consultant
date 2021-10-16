import { LOGIN_DOCTOR, LOGIN_PATIENT, LOGOUT } from "../actions/type";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user };

export function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_DOCTOR:
      localStorage.setItem("user", {
        username: payload.username,
        account_type: "doctor",
      });
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload.username, account_type: "doctor" },
      };
    case LOGIN_PATIENT:
      localStorage.setItem("user", {
        username: payload.username,
        account_type: "patient",
      });
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload.username, account_type: "patient" },
      };
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return;
  }
}
