import * as api from '../api/index.js';
import { loginUser, updateUser, getUser } from '../state/authSlice';


export const retrieveUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch(getUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const userSignIn = (userInfo, router) => async (dispatch) => {
  console.log(userInfo)
  
  try {
    const { data } = await api.userLogin(userInfo);

    dispatch(loginUser(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = (userInfo, router) => async (dispatch) => {
  console.log(userInfo)

  try {
    const { data } = await api.userRegister(userInfo);

    dispatch(loginUser(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (id, userInfo) => async (dispatch) => {
  console.log(id)
  try {
    const { data } = await api.updateUserInfo(id, userInfo);

    dispatch(updateUser(data));
  } catch (error) {
  console.log(error)
  }
}