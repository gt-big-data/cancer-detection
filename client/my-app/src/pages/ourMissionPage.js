import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Center,
} from '@chakra-ui/react';
import { theme } from '../components/themeFile.js';

const AboutUsPage = () => {
  return (
    <section id="ourMissionPage">
      <ChakraProvider theme={theme}>
        <Box id="mission-title" justify="space-between" bg="#90BEDE" w="100%">
          <Heading as="h1" align="center">
            <Text
              color="white"
              as="t1"
              font="Sans Serif"
              fontSize="99px"
              text-align={'center'}
            >
              Our Mission
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
                Unfortunately, as everyone knows, cancer continues to plague our
                world and change the lives of our loved ones. It is imperative
                that we strive to help those affected by cancer. A prediction
                from the American Cancer Society shows that in 2022, about
                287,850 women were diagnosed with a form of invasive breast
                cancer. Although the number of cases is declining each year,
                there is clearly still a large number of people affected by
                cancer, and we want to help people through that process. Our
                main goal will be to create a system that can help entry-level
                doctors or doctors with less experience/resources make more
                informed decisions. Our system will determine the stage and
                severity of a tumor, and further provide resources to help users
                understand the diagnosis and formulate appropriate next steps.
                Equipped with support from an ML system, doctors can feel more
                comfortable in their diagnoses and treatment plans which means
                that more people can get the proper care they need.
              </Text>
            </Center>
          </Flex>
        </VStack>
      </ChakraProvider>
    </section>
  );
};

export default AboutUsPage;
