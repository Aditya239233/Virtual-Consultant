import {
  REGISTER_SUCCESS_DOCTOR,
  REGISTER_FAIL_DOCTOR,
  LOGIN_SUCCESS_DOCTOR,
  LOGIN_FAIL_DOCTOR,
  LOGOUT,
} from "../actions/type";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case REGISTER_SUCCESS_DOCTOR:
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload.username, account_type: "doctor" },
      };
    case REGISTER_FAIL_DOCTOR:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS_DOCTOR:
      return {
        ...state,
        isLoggedIn: true,
        user: { username: payload.username, account_type: "doctor" },
      };
    case LOGIN_FAIL_DOCTOR:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
