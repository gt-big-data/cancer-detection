import React, { useState } from 'react';
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
  Heading,
  Button,
} from '@chakra-ui/react';
import { theme } from '../components/themeFile.js';

const Home = () => {
  const [image, setImage] = useState(null);
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      const data = new FormData();
      data.append('file', event.target.files[0]);
      console.log(event.target.files[0]);

      fetch('http://localhost:5000/predict', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    // console.log('hi');
  };

  //this.state = {_button : <Button isLoading loadingText='loading' colorScheme='teal'></Button>};

  const [showLoader, setShowLoader] = useState(false);
  const [showPrediction, setShowPrediction] = useState(null);

  const onPrediction = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 1000);
    setShowPrediction(
      Math.random() < 0.5 ? 'Cancer Detected' : 'No Cancer Detected'
    );
  };

  return (
    <ChakraProvider name="home" theme={theme}>
      <VStack spacing="10" bg="brand.200">
        <Box>
          <Heading align="center" size="lg">
            Introducing our
          </Heading>
          <Heading align="center" size="2xl">
            Cancer Detection Algorithm
          </Heading>
        </Box>

        <Wrap justify="center" bg="brand.200" maxW="md" borderWidth="2px">
          <Box align="center">
            <Text as="b" fontSize="lg">
              Please Insert Image
            </Text>
            <Input
              type="file"
              size="md"
              onChange={onImageChange}
              align="center"
            />
            {image && <Image src={image} alt="preview image" />}
          </Box>
        </Wrap>
        <Button
          isLoading={showLoader}
          loadingText="Predicting..."
          as="button"
          colorScheme="teal"
          size="md"
          onClick={onPrediction}
        >
          Make Prediction
        </Button>
        <Box bg="brand.300" spacing="4px" boxSize="md" borderWidth="3px">
          <Heading align="center" size="lg" minW="md">
            Prediction Output
          </Heading>
          <Text align="center" fontSize="4xl">
            {showPrediction}
          </Text>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default Home;

var state = {
  selectedFiled: null,
};

const fileSelectedHandler = event => {
  if (!event.target.files || event.target.files.length === 0) {
  }
  this.setState({
    selectedFiled: event.target.files[0],
  });
};

//UPLOAD INFO HERE: https://www.youtube.com/watch?v=XeiOnkEI7XI https://academind.com/tutorials/reactjs-image-upload
const fileUploadHandler = () => {
  axios.post('my', this.state.selectedFiled.name);
};
