import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
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
      "http://127.0.0.1:5000/api/user/login",
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
        
        payload:error.response && error.response.data.message ? error.response.data.message: error.message
    
    })
  }
};