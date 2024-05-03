import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text } from '@chakra-ui/react';
import React from 'react';


export const LoginPage = () => {
  return (
    <>
     <Text fontFamily='roboto' fontSize="xl" paddingTop='10px' color="black" textAlign='center'>
        Login here using your username and password
      </Text>
       <LoginForm/>
    </>
   
  );
};
