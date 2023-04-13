import { Box, Link, HStack, Center, VStack, Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './themeFile.js';
import { HashLink as HLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav>
    <ChakraProvider theme={theme}>
      <Center w="100%" bg="brand.300">
        <HStack h="50px" spacing="100px" as="b">
          <Link href="https://google.com">Home</Link>
          <HLink to='#ourteam' smooth>Our Team</HLink>
          <Link href="https://drive.google.com">Our Model</Link>
          <Link href="https://google.com/maps">Filler2</Link>

        </HStack>
      </Center>
    </ChakraProvider>
    </nav>
  );
}
