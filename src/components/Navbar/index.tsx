import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { logoutUser } from 'src/features/Auth/auth-slice';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const storeState = useAppSelector((state) => state.auth);
  const storeDispatch = useAppDispatch();

  const handleUserLogout = () => {
    storeDispatch(logoutUser());
  };

  console.log(storeState);

  return (
    <Box py={1}>
      <Container maxWidth={'container.md'}>
        <HStack>
          <Heading size={'md'}>Sloov</Heading>
          <Spacer />
          <Box>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
              size={'sm'}
              mx={4}
              onClick={toggleColorMode}
              variant="ghost"
            />
            {storeState.isAuthenticated && (
              <Button
                onClick={handleUserLogout}
                size={'sm'}
                colorScheme={'red'}
              >
                Logout
              </Button>
            )}
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
