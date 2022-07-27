import { Dispatch } from 'redux';
import AppService from '../../services';
import { AuthAction } from '../actionsTypes';
import { AuthActionTypes } from '../types';

export const LoginUser =
  (user: { email: string; password: string }) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await AppService.loginUser(user);
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: res.data,
      });
      console.log(res.data);
      return Promise.resolve(res.data);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  };

export const LogoutUser = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({
    type: AuthActionTypes.LOGOUT,
    payload: null,
  });
};
