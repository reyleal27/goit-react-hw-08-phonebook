import React from 'react';
import { Container, Text, Avatar } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container
      as="header"
      width="100%"
      maxW="1200px"
      padding={4}
      fontFamily="roboto"
      fontSize="2xl"
      boxShadow="lg"
      borderRadius={5}
      marginBottom={10}
      marginTop={5}
    >
      {isLoggedIn ? (
        <Container
          display="flex"
          justifyContent="space-between"
          margin="0 auto"
          maxW="1200px"
        >
          <Text>Welcome {user.name},</Text>
          <div>
            <Avatar name={user.name} />
            <ChakraLink as={ReactRouterLink} marginLeft={5} to="/logout" onClick={handleLogout}>
              Logout
            </ChakraLink>
          </div>
        </Container>
      ) : (
        <Container
          display="flex"
          justifyContent="space-between"
          margin="0 auto"
          maxW="1200px"
        >
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            _hover={{ color: 'blue.500' }}
          >
            Home
          </ChakraLink>

          <div>
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
          </div>
        </Container>
      )}
    </Container>
  );
};
