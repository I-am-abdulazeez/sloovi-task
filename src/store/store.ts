import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'src/features/Auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { users: UsersState}
export type AppDispatch = typeof store.dispatch;
