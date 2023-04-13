import { Box, Link, HStack, Center, VStack, Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme }from './themeFile.js';

export default function Navbar() {
  return (
    <ChakraProvider theme={theme}>
      <Center w="100%" bg="brand.300">
        <HStack h="50px" spacing="100px" as='b'>
          <Link href="https://google.com" >Home</Link>
          <Link href="https://gmail.com">Our Team</Link>
          <Link href="https://drive.google.com">Our Model</Link>
          <Link href="https://google.com/maps">Filler2</Link>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}
