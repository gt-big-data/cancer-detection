import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import App from '../App';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  Image,
  Flex,
  Heading,
  Center,
  Spacer,
  Stack,
  extendTheme,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { theme } from '../components/themeFile.js';

const aboutOurModelPage = () => {
  return (
    <section id="aboutOurModelPage">
      <ChakraProvider theme={theme}>
        <Box id="about-title" justify="space-between" bg="#90BEDE" w="100%">
          <Heading as="h1" align="center">
            <Text
              color="white"
              as="t1"
              font="Sans Serif"
              fontSize="99px"
              text-align={'center'}
            >
              About Our Model
            </Text>
          </Heading>
        </Box>
        <VStack m="100px" mt="50px" spacing="50px">
          <Flex id="blurb-container" w="100%">
            <Center display="flex" id="blurb">
              <Text
                color="black"
                as="blurb-text"
                font="Sans Serif"
                fontSize="100px"
              >
                We start off by iterating through the array of files and
                filtering by the .png extension. We then created the images from
                the files, resized them to 150 by 150 pixels, and converted them
                to grayscale to make them all uniform. Then we flattened the
                images to a 1d array and added the respective labels, where 0
                was benign, 1 was malignant, and 2 was normal.For our model,
                after testing with multiple models such as CNN, SVM,
                Naive-Bayes, and K-Nearest, we found that the Random Forest
                model had the highest accuracy and was the best fit for our
                data. We also experimented with using a combination of CNN,
                LSTM, and Random Forest, where the Random Forest classifier was
                used for the output layer of the CNN that extracted the
                features, which used the ReLU activation function. However, the
                Random Forest by itself still gave us the best accuracy.
              </Text>
            </Center>
          </Flex>
        </VStack>
      </ChakraProvider>
    </section>
  );
};

export default aboutOurModelPage;
