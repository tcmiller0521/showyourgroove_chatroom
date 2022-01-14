import * as api from '../api/index.js';
import { loginUser } from '../state/authSlice';

export const userSignIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userLogin(formData);

    dispatch(loginUser(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userRegister(formData);

    dispatch(loginUser(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};