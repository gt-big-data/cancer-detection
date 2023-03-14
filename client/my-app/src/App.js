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
  Image,
  Flex,
  Heading,
  Center,
  Spacer,
  Stack,
  extendTheme,
  Card, CardHeader, CardBody, CardFooter,
} from '@chakra-ui/react';
import Navbar from './components/navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Flex alignItems='center' direction='column'>
          
          <Box id='page-title' justify="space-between" bg ='#90BEDE' w ='100%'>
            <Heading as = 'h1' align='center'>
              <Text color='white' as ='t1' fontSize='99px'text-align={'center'}>
                Meet The Team
              </Text>
            </Heading>
          </Box>
          <Navbar />


          <Box id='card-holder' w = '100%'>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              display ='flex'
              w='100%'
              h='500px'
            >
              <Flex w='100%'>
                <Image
                  objectFit='cover'
                  w='40%'
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                                  
                />
                <Center w='100%'>
                  <Stack direction = 'column' >
                    <CardBody w='100%' align='center'>
                      <Heading  size='lg'>Arrington Goss</Heading>
                      <Text size = 'sm' fontStyle='italic' >
                        Role
                      </Text>
                      <Text align='center' py='2' size = 'md'>
                        Short Description
                      </Text>
                    </CardBody>
                  </Stack>
                </Center>
              </Flex>
              
            </Card>
          </Box>
          
          <Box id='card-holder' w = '100%'>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              display ='flex'
              w='100%'
              h='500px'
            >
              <Flex w='100%'>
                <Image
                  objectFit='cover'
                  w='40%'
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                                  
                />
                <Center w='100%'>
                  <Stack direction = 'column' >
                    <CardBody w='100%' align='center'>
                      <Heading  size='lg'>Simona Ivanov</Heading>
                      <Text size = 'sm' fontStyle='italic' >
                        Role
                      </Text>
                      <Text align='center' py='2' size = 'md'>
                        Short Description
                      </Text>
                    </CardBody>
                  </Stack>
                </Center>
              </Flex>
              
            </Card>
          </Box>
        
        </Flex>

      
      
    </ChakraProvider>
  );
}

export default App;
