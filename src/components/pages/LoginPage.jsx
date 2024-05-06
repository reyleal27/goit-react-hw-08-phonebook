import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text, Container } from '@chakra-ui/react';
import React from 'react';

export const LoginPage = () => {
  return (
    <Container
      as="section"
      padding={5}
      centerContent
      width={600}
      bgGradient="linear(blue.200,blue.600,red.200)"
    >
      <Text
        fontFamily="roboto"
        fontSize="xl"
        padding="10px"
        color="black"
        textAlign="center"
      >
        Login here using your username and password
      </Text>
      <LoginForm />
    </Container>
  );
};
