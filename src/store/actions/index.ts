import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';

import { Dispatch } from 'redux';
import http from '../../http';
import { Admin } from '../../models';

export const LoginUser = createAsyncThunk('user/fetchUsers', (data: Admin) => {
  return http.post('/login', data).then((response) => response.data);
});
