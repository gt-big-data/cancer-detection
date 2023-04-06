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
  Image
} from '@chakra-ui/react';
import { theme }from '../components/themeFile.js';


const AboutUsPage = () => {
	return (
		<div>
				<h1>AboutUsPage</h1>
				<Link to='/'>Go to AboutUsPage</Link>
		</div>
	)
};
    
  export default AboutUsPage;