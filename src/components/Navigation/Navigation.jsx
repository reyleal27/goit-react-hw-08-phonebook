import React from 'react';
import { Container } from '@chakra-ui/react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useAuth } from '../../redux/hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <ChakraLink as={ReactRouterLink} to="/" _hover={{ color: 'blue.500' }}>
        Home
      </ChakraLink>
      {isLoggedIn && (
        <ChakraLink
          as={ReactRouterLink}
          marginLeft={5}
          to="/contacts"
          _hover={{ color: 'blue.500' }}
        >
          Contacts
        </ChakraLink>
      )}
    </Container>
  );
};
