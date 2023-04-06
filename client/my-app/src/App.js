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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='eshani google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='ronak google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='harshika google drive image'
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
                  src = 'https://drive.google.com/uc?export=view&id=11jmiZM61ivIpLMZZ0JHSf69xZPuO1COt'
                  alt= 'aryan google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1all2ntmAgQyInZKOcWDSh6lZe4T0alXh'
                  alt='harinishree google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='athanasios google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='saksham google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1hcx1NMt7kC9q4AQyl5CRMzACMFc94rT2'
                  alt='zeyad google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='adivya sharma google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=169GmT7ModjgBx7qi8t0DajQSpsrB4QsU'
                  alt='william google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1qyjEdKfYTKN-40LEzQ-pWy1snqzY4ebb'
                  alt='jamez google drive image'
                  borderRadius='lg'
                  h='25%'
                  align='center'
                />
                <Stack mt='6' spacing='3' align='center'>
                  <Heading size='md'>Jamez De Ocampo</Heading>
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
                  src='https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA'
                  alt='rama google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1vtYngWM_UHJRIVYi03UL9KYQS0oNyIAg'
                  alt='tony google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1cw9v_nGxglrdn8IwtJWxrrEkGiaA7sza'
                  alt='tae google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1eCQUOs2xzHq2agl3yO52g_3-TGdRcmoc'
                  alt='simona google drive image'
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
                  src='https://drive.google.com/uc?export=view&id=1LardVaKXtwFIwQPj9qRRlb1d_RwNg_xk'
                  alt='arrington google drive image'
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
        {/* <Navbar /> */}
          
    </ChakraProvider>
  );
}

export default App;
