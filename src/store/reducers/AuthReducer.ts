import { AuthAction } from '../actionsTypes';
import { initialState } from '../state';
import { AuthActionTypes } from '../types';

export const AuthReducer = (state: initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
