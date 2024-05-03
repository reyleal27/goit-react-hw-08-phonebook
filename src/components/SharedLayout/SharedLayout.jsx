import { Container} from '@chakra-ui/react';
import React from 'react';
import {  Outlet } from 'react-router-dom';


export const SharedLayout = () => {
  return (
      <Container width={600} margin='20px auto' bgGradient='linear(blue.200,blue.600,red.200)'>
          {/* <Box width='200px' display='flex' alignItems='center' justifyContent='space-between'>
              <NavLink to='/' className='Navlinks'end>
              <Text fontSize={30} textDecoration='none'>Register</Text>
          </NavLink>
          <NavLink to='/login' className='Navlinks'>
             <Text fontSize={30}  color='blue.500'>Login</Text>
          </NavLink>
          </Box> */}
          
         
              <Outlet></Outlet>
      
    </Container>
  )
}
