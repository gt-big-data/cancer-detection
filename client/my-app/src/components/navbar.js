import { Box, Link, HStack, Center, VStack, Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './themeFile.js';
import { HashLink as HLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <ChakraProvider theme={theme}>
      <Center w="100%" bg="brand.300">
        <HStack h="50px" spacing="100px" as="b">
          <HLink to="#ourMissionPage" smooth>Our Mission</HLink>
          <HLink to="#aboutOurModelPage" smooth>About the Model</HLink>
          <HLink to="#ourTeamPage" smooth>Our Team</HLink>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}
