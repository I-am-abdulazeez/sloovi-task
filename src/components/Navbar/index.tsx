import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === 'light' ? <SunIcon /> : <MoonIcon />;
  return (
    <Box py={1}>
      <Container maxWidth={'container.md'}>
        <HStack>
          <Heading size={'md'}>Sloov</Heading>
          <Spacer />
          <IconButton
            aria-label="Toggle dark mode"
            icon={icon}
            size={'sm'}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
