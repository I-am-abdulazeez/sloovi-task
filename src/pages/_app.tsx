import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { store } from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
       <Box height={'100vh'}>
       <Navbar />
        <Component {...pageProps} />
        <Footer />
       </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
