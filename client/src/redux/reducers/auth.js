import { LOGIN_DOCTOR, LOGIN_PATIENT, LOGOUT } from "../actions/type";

const username = localStorage.getItem("username");
const account_type = localStorage.getItem("account_type");
// const user = null;
const initialState =
  username && account_type
    ? { isLoggedIn: true, user: { username, account_type } }
    : { isLoggedIn: false, user: null };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case LOGIN_DOCTOR:
      localStorage.setItem("username", payload);
      localStorage.setItem("account_type", "doctor");
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload, account_type: "doctor" },
      };
    case LOGIN_PATIENT:
      localStorage.setItem("username", payload);
      localStorage.setItem("account_type", "patient");
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload, account_type: "patient" },
      };
    case LOGOUT:
      localStorage.removeItem("username");
      localStorage.removeItem("account_type");
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
