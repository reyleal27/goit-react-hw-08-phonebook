import React from 'react';
import { Container,Text } from '@chakra-ui/react';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

export const RegisterPage = () => {
  return (
     <Container padding={5} centerContent width={600}
   
      bgGradient="linear(blue.200,blue.600,red.200)">
      <Text
        fontSize="2xl"
        color="black"
        fontFamily="roboto"
        width="100px"
        margin="auto"
        paddingTop="10px"
      >
        Register
      </Text>
      <RegistrationForm />
    </Container>
  );
};
