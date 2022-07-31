import type { NextPage } from 'next';
import Head from 'next/head';

import { Input, Center, VStack, Heading, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import type { Admin } from '../models';

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Admin>();

  const handleAdminLogin: SubmitHandler<Admin> = (data) => {
    const admin = { email: data.email, password: data.password };
    console.log(admin);
  };

  return (
    <Center height={'89vh'}>
      <Head>
        <title>Login</title>
      </Head>
      <VStack spacing={5}>
        <Heading size={'md'}>Admin Login</Heading>
        <form onSubmit={handleSubmit(handleAdminLogin)}>
          <VStack spacing={4}>
            <Input
              width={'300px'}
              placeholder="Email"
              {...register('email', {
                required: true,
              })}
            />
            <Input
              width={'300px'}
              placeholder="Password"
              {...register('password', {
                required: true,
              })}
            />
            <Button
              colorScheme={'purple'}
              type="submit"
              isLoading={isSubmitting}
              size={'sm'}
              width={'100%'}
            >
              Login Admin
            </Button>
          </VStack>
        </form>
      </VStack>
    </Center>
  );
};

export default Login;
