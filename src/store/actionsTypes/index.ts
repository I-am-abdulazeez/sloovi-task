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
  payload: {} | null;
}

export type AuthAction = LOGINAction | LOGOUTAction;
