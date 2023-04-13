import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';
//Colors that we will use
import { theme } from './components/themeFile.js';
import Navbar from './components/navbar.js';
import Home from './pages/homePage.js';
import AboutUsPage from './pages/ourTeam.js';
// import { HashLink as HLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

        <ChakraProvider theme={theme}>
          <Navbar />
          <Home />
          <AboutUsPage />
        </ChakraProvider>

    </BrowserRouter>
  );
}

export default App;
