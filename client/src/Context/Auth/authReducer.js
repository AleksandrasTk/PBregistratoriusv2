import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  COACH_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGOUT,
  //   USER_LOADED,
  //   AUTH_ERROR,
  //   LOGIN_SUCCESS,
  //   LOGIN_FAIL,
  //   CLEAR_ERRORS,
} from "../types";

var switchCases = (state, action) => {
  switch (action.type) {
    case COACH_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        coach: action.payload,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        coach: null,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };
    default:
      return {
        state,
      };
  }
};
export default switchCases;
