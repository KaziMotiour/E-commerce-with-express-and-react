import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGIN_LOGOUT });
};


export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/users",
      {name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        "Authorization": `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.get(
      'http://127.0.0.1:5000/api/users/profile/',
      config
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const UpdateUserProfile = (user) => async (dispatch, getState) => {
    try{
  dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.put(
      'http://127.0.0.1:5000/api/users/profile/',user,
      config
    );

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}