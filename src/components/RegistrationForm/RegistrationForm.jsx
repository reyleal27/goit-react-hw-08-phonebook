import { FormLabel, Button, Container, Text, Input } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      );
     
    form.reset();
    };
    
  return (
    <Container padding={5} centerContent>
      <Text fontSize="2xl" color="black" fontFamily="roboto" marginBottom={10}>
        Register
      </Text>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <FormLabel color="white" fontFamily="roboto">
          Username
        </FormLabel>
        <Input
          name="name"
          width={350}
          errorBorderColor="crimson"
          type="text"
          placeholder="username"
          _placeholder={{ color: 'red.300' }}
        />

        <FormLabel color="white" fontFamily="roboto" paddingTop={5}>
          Email
        </FormLabel>
        <Input
          errorBorderColor="crimson"
          _placeholder={{ color: 'red.300' }}
          type="email"
          name="email"
          placeholder="email"
        />
        <FormLabel color="white" fontFamily="roboto" paddingTop={5}>
          Password
        </FormLabel>
        <Input
          errorBorderColor="crimson"
          _placeholder={{ color: 'red.300' }}
          placeholder="password"
          type="password"
          name="password"
        />

        <Button
          width={100}
          padding="8px 6px"
          bg="blue.400"
          display="block"
          margin="30px auto"
          type="submit"
        >
          Signup
        </Button>
        <Text>
          Already registered?{' '}
          <ChakraLink
            as={ReactRouterLink}
            color="blue"
            fontSize="18px"
            to="/login"
          >
            Login
          </ChakraLink>
        </Text>
      </form>
    </Container>
  );
};
