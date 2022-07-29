import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import Footer from 'src/components/Footer';
import Navbar from 'src/components/Navbar';

import store from 'src/store/store';

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
