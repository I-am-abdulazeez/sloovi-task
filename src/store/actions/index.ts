import { AuthActionTypes } from '../types';

interface LOGINAction {
  type: AuthActionTypes.LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

interface LOGOUTAction {
  type: AuthActionTypes.LOGOUT;
  payload: {};
}

export type AuthAction = LOGINAction | LOGOUTAction;
