import { AppState } from 'src/models';

export const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: '',
};
