import { Container } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { useAuth } from '../../redux/hooks/useAuth'
export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
      <Container as="header"
      width="100%"
      maxW="1200px"
      padding={4}
      fontFamily="roboto"
      fontSize="2xl"
      boxShadow="lg"
      borderRadius={5}
      marginBottom={10}
          marginTop={5}
          display='flex'
      justifyContent='space-between'>
          <Navigation />
          {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Container>
  )
}
