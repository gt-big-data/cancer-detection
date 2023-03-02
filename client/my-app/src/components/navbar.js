import { Box, Link, HStack, Center, VStack, Flex } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <ChakraProvider>
      <Center w="100%" bg="#34b1eb">
        <VStack>
          <HStack h="50px" spacing="100px">
            <Link href="https://google.com">Home</Link>
            <Link href="https://gmail.com">Our Team</Link>
            <Link href="https://drive.google.com">Filler</Link>
            <Link href="https://google.com/maps">Filler2</Link>
          </HStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
