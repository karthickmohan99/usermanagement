/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Dispatch } from 'redux';
import { Istate } from '../../Pages/Register/Signup';
import { Istates } from '../../Pages/Login/Login';
import { UseData } from '../../Pages/Modal/Modals';
import Token from '../../TokenService/Token';

export const POST_SIGNUSER = 'POST_SIGNUSER';
export const FETCH_SIGNUSER = 'FETCH_SIGNUSER';
export const DELETE_USER = 'DELETE_USER';
export const POST_LOGUSER = 'POST_LOGUSER';
type stringTab = UseData<string>;

export const adduser = (values: Istate) => {
  return async (dispatch: Dispatch) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/signup`, values)
      .then((res) => {
        dispatch({ type: POST_SIGNUSER, payload: values });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const adduserlogin = (values: Istates, navigate: any) => {
  console.log(values, 'logpost');
  return async (dispatch: Dispatch) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, values)
      .then((res) => {
        console.log(res, 'logpost res');
        Token.setAccessToken(res?.data?.message?.token);
        Token.setRefreshToken(res?.data?.message?.refreshToken);
        dispatch({ type: POST_LOGUSER, payload: values });
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getuser = () => {
  console.log('Im in getuser action');
  return async (dispatch: Dispatch) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/home`, {
        headers: { 'x-access-token': Token.getAccessToken() }
      })
      .then((res) => {
        console.log(res, 'getres');
        dispatch({ type: FETCH_SIGNUSER, payload: res.data.data });
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };
};

export const removeuser = (userData: string | number) => {
  return async (dispatch: Dispatch) => {
    await axios

      .delete(`${process.env.REACT_APP_SERVER_URL}/Deleteuser/${userData}`)
      .then((res) => {
        console.log(res, 'Deleteresponse');
        dispatch({ type: DELETE_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const putuser = (edituser: stringTab, id: string) => {
  console.log(edituser, 'edituser');
  console.log('Im in edit action');
  return async () => {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/Edituser/${id}`, edituser)

      .then((res) => {
        console.log(res, 'putf');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
