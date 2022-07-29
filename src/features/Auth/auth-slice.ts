import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../models';
import { LoginUser } from '../../store/actions';
import { initialState } from '../../store/state';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(
      LoginUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = '';
      }
    );
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
