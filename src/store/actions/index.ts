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
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
