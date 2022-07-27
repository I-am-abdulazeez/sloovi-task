import { Box, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../store';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { LoginUser, LogoutUser } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const reduxState = useSelector((state: State) => state.auth);

  console.log(reduxState);

  const handleLogin = () => {
    const user = {
      email: 'smithwills1989@gmail.com',
      password: '12345678',
    };
    LoginUser(user);
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
          LogoutUser();
          console.log(reduxState);
        }}
      >
        Logout User
      </Button>
    </Box>
  );
};

export default Home;
