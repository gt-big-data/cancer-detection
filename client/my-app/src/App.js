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
import AboutOurModel from './pages/aboutOurModelPage.js';
import OurMissionPage from './pages/ourMissionPage.js';
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
          <Box w="100" h="10px"/>
          <Home />
          <Box w="100" h="10px"/>
          <OurMissionPage/>
          <Box w="100" h="10px"/>
          <AboutOurModel/>
          <Box w="100" h="10px"/>
          <AboutUsPage />          
          <Box w="100" h="10px"/>
        </ChakraProvider>

    </BrowserRouter>
  );
}

export default App;
