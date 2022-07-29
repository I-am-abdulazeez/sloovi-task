import { Box, Button } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { logoutUser } from 'src/features/Auth/auth-slice';
import { LoginUser } from 'src/store/actions';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    const user = {
      email: 'smithwills1989@gmail.com',
      password: '12345678',
    };
    dispatch(LoginUser(user));

    console.log(AppState);
  };

  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <Button onClick={handleLogin} size={'sm'}>
        Login button
      </Button>
      <Button
        onClick={() => {
          dispatch(logoutUser());
          console.log(AppState);
        }}
      >
        Logout User
      </Button>
    </Box>
  );
};

export default Home;
