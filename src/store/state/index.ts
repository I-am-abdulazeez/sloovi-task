export interface IUser {
  code: number;
  message: string;
  module: string;
  results: {
    by_default: string;
    company_id: string;
    icons: string;
    is_first: number;
    status: string;
    token: string;
    user_id: string;
    want_login: string;
  };
  status: string;
}

export interface IState {
  user: IUser | null;
  isAuthenticated: false;
}

export const initialState: IState = {
  user: null,
  isAuthenticated: false,
};
