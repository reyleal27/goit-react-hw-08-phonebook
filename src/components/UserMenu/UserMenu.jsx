import React from 'react'
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { Text, Avatar,Container } from '@chakra-ui/react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const UserMenu = () => {
    const {  user } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Container
          display="flex"
          alignItems='center'
          gap={5}
          margin="0 auto"
          maxW="1200px"
          justifyContent='flex-end'
      >
          <Avatar name={user.email} />
          <Text>{user.email}</Text>
          <div>
            
            <ChakraLink as={ReactRouterLink} marginLeft={5} to="/logout" onClick={handleLogout}>
              Logout
            </ChakraLink>
          </div>
        </Container>
  )
}
