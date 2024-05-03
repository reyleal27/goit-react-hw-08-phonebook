import { Container } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
      <Container>
          <NavLink to='/register'>Register</NavLink>
    </Container>
  )
}
