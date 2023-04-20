import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Grid,
  GridItem,
  Image,
  Heading,
  Stack,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { theme } from '../components/themeFile.js';

const AboutUsPage = () => {
  return (
    <section id="ourTeamPage">
      <ChakraProvider theme={theme}>
        <Box id="page-title" justify="space-between" bg="#90BEDE" w="100%">
          <Heading as="h1" align="center">
            <Text
              color="white"
              as="t1"
              font="Sans Serif"
              fontSize="99px"
              text-align={'center'}
            >
              Meet The Team
            </Text>
          </Heading>
        </Box>
        <Grid
          templateRows="repeat(4, 2fr)"
          templateColumns="repeat(4, 1fr)"
          gap="4"
          pl="4"
          pr="4"
        >
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=16p4bDesQaj0n7os9N_0yCSNIrQqzv0IA"
                  alt="eshani google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Eshani Chauk</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Team Lead
                  </Text>
                  <Link>www.linkedin.com/in/eshani-chauk/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1AIPfSFvDk6WVHB-d3bXLMjouDPHuFK0I"
                  alt="ronak google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Ronak Agarwal</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>www.linkedin.com/in/ronak-agarwal9/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1k_jmguKXW95n5EQNYTcjYjUv7Iq5Bo28"
                  alt="harshika google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Harshika Gelivi</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>www.linkedin.com/in/harshika-gelivi/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=11jmiZM61ivIpLMZZ0JHSf69xZPuO1COt"
                  alt="aryan google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Aryan Shah</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>www.linkedin.com/in/aryan-shah7/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1all2ntmAgQyInZKOcWDSh6lZe4T0alXh"
                  alt="harinishree google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Harinishree Sathu</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>www.linkedin.com/in/harinishreesathu/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1Rf2s5f_ZrjBEOpl24xqgrp2Lco5vuyvd"
                  alt="athanasios google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Athanasios Taprantzis</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>
                    www.linkedin.com/in/athanasios-taprantzis-7227811b8/
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1YnqhaQjUafQzp-spPa0Uax6LTWXWwskq"
                  alt="saksham google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Saksham Purbey</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Analysis
                  </Text>
                  <Link>www.linkedin.com/in/saksham-purbey-17b69516b/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1hcx1NMt7kC9q4AQyl5CRMzACMFc94rT2"
                  alt="zeyad google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Zeyad Al Sakhi</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Platform
                  </Text>
                  <Link>www.linkedin.com/in/zeyadalsakhi/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1UsrpIopPrLiTMTFP0LBKZqlTGJONqAQ0"
                  alt="divya sharma google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Divya Sharma</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Platform
                  </Text>
                  <Link>www.linkedin.com/in/divyaasharmaa/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=169GmT7ModjgBx7qi8t0DajQSpsrB4QsU"
                  alt="william google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">William Shutt</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Platform
                  </Text>
                  <Link>www.linkedin.com/in/william-shutt2/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1qyjEdKfYTKN-40LEzQ-pWy1snqzY4ebb"
                  alt="jamez google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Jamez De Ocampo</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Platform
                  </Text>
                  <Link>www.linkedin.com/in/jamez-de-ocampo-75a467256/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=16SuMzfGf1Mv-MMCuVhAUrYrrFZQTObgM"
                  alt="rama google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Rama Khabbaz</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Data Viz
                  </Text>
                  <Link>www.linkedin.com/in/rama-khabbaz-88504a20b/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1vtYngWM_UHJRIVYi03UL9KYQS0oNyIAg"
                  alt="tony google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Anthony Nguyen</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Data Viz
                  </Text>
                  <Link>www.linkedin.com/in/anthonynguyenv/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1cw9v_nGxglrdn8IwtJWxrrEkGiaA7sza"
                  alt="tae google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Taesung Uhm</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Data Viz
                  </Text>
                  <Link>www.linkedin.com/in/taesung-uhm-88577b76/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1BQV1N_5q7MNlEoI_eFj6DoBax0uW2Lxr"
                  alt="simona google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Simona Ivanov</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Data Viz
                  </Text>
                  <Link>www.linkedin.com/in/simone-ivanov/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h="400px" align="center">
            <Card h="100%" align="center">
              <CardBody align="center">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1LardVaKXtwFIwQPj9qRRlb1d_RwNg_xk"
                  alt="arrington google drive image"
                  borderRadius="lg"
                  h="50%"
                  w="90%"
                  align="center"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Arrington Goss</Heading>
                  <Text size="md" fontStyle="italic" align="center">
                    Data Viz
                  </Text>
                  <Link>www.linkedin.com/in/arrington-goss/</Link>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </ChakraProvider>
    </section>
  );
};

export default AboutUsPage;
