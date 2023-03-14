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
        <Box id='page-title' justify="space-between" bg ='#90BEDE' w ='100%'>
            <Heading as = 'h1' align='center'>
              <Text color='white' as ='t1' font ='Sans Serif' fontSize='99px'text-align={'center'}>
                Meet The Team
              </Text>
            </Heading>
          </Box>
        <Navbar />
        <Grid 
          templateRows='repeat(4, 2fr)'
          templateColumns='repeat(4, 1fr)'
          gap='4'
          pl = '4'
          pr ='4'
        >
          
          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Eshani Chauk</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Ronak Agarwal</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Harshika Gelivi</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Aryan Shah</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Harinishree Sathu</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Athanasios Taprantzis</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Saksham Purbey</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Zeyad Al Sakhi</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Adivya Sharma</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>William Shutt</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>James De Ocampo</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Rama Khabbaz</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Anthony Nguyen</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Taesung Uhm</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Simona Ivanov</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}  h='400px' align='center'>
          <Card h='100%' align='center'>
              <CardBody align ='center'>
                
                <Image
                  src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/spongebob-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Arrington Goss</Heading>
                  <Text size='md' fontStyle='italic' align='center'>
                    Data Viz
                  </Text>
                  <Text text-align='center'>
                    Computer Science major with experience in React and Java
                  </Text>

                </Stack>
              </CardBody>
            </Card>
            
          </GridItem>

        </Grid>
        <Navbar />
          
    </ChakraProvider>
  );
}

export default App;
