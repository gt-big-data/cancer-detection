import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import App from '../App';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  GridItem,
  Image,
  Input,
  Wrap,
  Heading
} from '@chakra-ui/react';
import { theme }from '../components/themeFile.js';



const Home = () => {
	return (
    <ChakraProvider name="home" theme={theme} >
      <VStack spacing='10' bg="brand.200">
        <Box>
          <Heading align="center" size='lg'>Introducing our</Heading>
          <Heading align="center" size='2xl'>Cancer Detection Algorithm</Heading>
        </Box>
        <Wrap justify='center' bg="brand.200" maxW="md" borderWidth="2px">
          <Box align="center">
            <Text as='b' fontSize='lg'>Please Insert Image</Text>
              <Input 
                type="file"
                size="md"
                onChange={fileSelectedHandler}
                align="center"
              />
          </Box>
        </Wrap>
        <Box bg="brand.300" spacing='4px' boxSize='lg' borderWidth="3px">
          <Heading align="center" size='lg' minW='md'>Prediciton Output</Heading>
          <Image src={"https://media.npr.org/assets/img/2015/04/10/spiral-ct-scan-3c3825f3d5213a499fa7790ebea1e6d317d14b58.jpg"}/>
        </Box>
      </VStack>
    </ChakraProvider>
	)
};
    
export default Home;



var state = {
  selectedFiled: null
}

const fileSelectedHandler = event => {
  if (!event.target.files || event.target.files.length === 0) {
    
  }
  this.setState({
    selectedFiled: event.target.files[0]
  })
}

//UPLOAD INFO HERE: https://www.youtube.com/watch?v=XeiOnkEI7XI https://academind.com/tutorials/reactjs-image-upload
const fileUploadHandler = () => {
  axios.post('my', this.state.selectedFiled.name)
}
