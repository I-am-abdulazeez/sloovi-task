import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';

import http from 'src/http';
import type { Admin } from 'src/models';

export const LoginUser = createAsyncThunk('user/fetchUsers', (data: Admin) => {
  return http.post('/login', data).then((response) => response.data);
});
