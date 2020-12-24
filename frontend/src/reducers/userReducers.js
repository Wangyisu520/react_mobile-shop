import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from "../constents/userContents";
//用户登陆
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.paylod,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
//用户注册
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.paylod,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };
    default:
      return state;
  }
};
//用户详情
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.paylod,
      };
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };
    default:
      return state;
  }
};
//更新用户详情
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: action.paylod,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
