import React from 'react';
import { FormLabel, Button, Text, Input } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <FormLabel
        color="white"
        fontFamily="roboto"
        display="flex"
        flexDirection={'column'}
      >
        Email
        <Input
          name="email"
          width={350}
          errorBorderColor="crimson"
          type="email"
          placeholder="Your email"
          _placeholder={{ color: 'red.300' }}
          required
        />
      </FormLabel>

      <FormLabel color="white" fontFamily="roboto" paddingTop={5}>
        Password
        <Input
          errorBorderColor="crimson"
          type="password"
          name="password"
          placeholder="Should be at least 7 characters"
          _placeholder={{ color: 'red.300' }}
          required
        />
      </FormLabel>
      <Button
        width={100}
        padding="8px 6px"
        bg="blue.400"
        display="block"
        margin="30px auto"
        type="submit"
      >
        Login
      </Button>
      <Text>
        Not yet registered?{' '}
        <ChakraLink
          as={ReactRouterLink}
          color="blue"
          fontSize="18px"
          to="/register"
        >
          Signup
        </ChakraLink>
      </Text>
    </form>
  );
};
