import { Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container centerContent h={400} gap={10} paddingTop={10}>
      <Text fontSize="6xl" color="blue.500" fontFamily="roboto">
        WELCOME
      </Text>
      <Link to="/register">
        <Button marginTop={20} w="250px" bg="blue.300">
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button w="250px" bg="blue.300">
          Login
        </Button>
      </Link>
    </Container>
  );
};
