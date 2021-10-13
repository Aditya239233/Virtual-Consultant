import {
  REGISTER_SUCCESS_DOCTOR,
  REGISTER_FAIL_DOCTOR,
  LOGIN_SUCCESS_DOCTOR,
  LOGIN_FAIL_DOCTOR,
  REGISTER_SUCCESS_PATIENT,
  REGISTER_FAIL_PATIENT,
  LOGIN_SUCCESS_PATIENT,
  LOGIN_FAIL_PATIENT,
  LOGOUT,
  SET_MESSAGE,
} from "./type";
import AuthService from "../../services/auth.service";

export const register_doctor =
  (
    email,
    username,
    medical_id,
    password,
    first_name,
    last_name,
    confirm_password,
    specialization
  ) =>
  (dispatch) => {
    console.log("register");
    return AuthService.register_doctor(
      email,
      username,
      medical_id,
      password,
      first_name,
      last_name,
      confirm_password,
      specialization
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS_DOCTOR,
          payload: username,
        });

        return Promise.resolve();
      },
      (error) => {
        console.log("heree");
        // const message =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();

        dispatch({
          type: REGISTER_FAIL_DOCTOR,
        });

        // dispatch({
        //   type: SET_MESSAGE,
        //   payload: message,
        // });

        return Promise.reject();
      }
    );
  };

// export const login = (username, password) => (dispatch) => {
//   return AuthService.login(username, password).then(
//     (data) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: { user: data },
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       dispatch({
//         type: LOGIN_FAIL,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
