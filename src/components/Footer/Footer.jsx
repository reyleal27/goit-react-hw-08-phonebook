import { Container,Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
      <Container as='footer' margin='20px auto' w={500} maxW='1200px' >
          <Text textAlign='center'>&copy; Copyright {new Date().getFullYear()} Phonebook_Contacts</Text>
    </Container>
  )
}
