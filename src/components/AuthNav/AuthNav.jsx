import { Container } from '@chakra-ui/react'
import React from 'react'
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
          <Container w='200'>
            <ChakraLink
              as={ReactRouterLink}
              to="/register"
              _hover={{ color: 'blue.500' }}
            >
              Register
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              marginLeft={5}
              to="/login"
              _hover={{ color: 'blue.500' }}
            >
              Login
            </ChakraLink>
          </Container>
    
    
  )
}
