import { Container, Text } from '@chakra-ui/react';
import React from 'react';


export const HomePage = () => {
  return (
    <Container paddingTop={20} bgGradient="linear(blue.200,blue.600,red.200)">
      <Text fontSize="7xl" color="black" textAlign="center" fontFamily="roboto">
        WELCOME TO MY PHONEBOOK
      </Text>
    </Container>
  );
};
