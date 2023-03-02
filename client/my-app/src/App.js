import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  Image
} from '@chakra-ui/react';
import Navbar from './components/navbar.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Grid
        h="800px"
        w="800px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} bg="papayawhip">
          <Image src='https://bit.ly/dan-abramov' alt = 'picture'/>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="tomato" />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
