import React from 'react';
import {
  FormLabel,
  Button,
  Container,
   Text,
  Input,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container padding={10} maxW="2xl" centerContent>
       
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel color="white" fontFamily="roboto">
          Email
        </FormLabel>
        <Input
          width={300}
          name="email"
          errorBorderColor="crimson"
          type="email"
          placeholder="email"
          _placeholder={{ color: 'red.300' }}
        ></Input>
        <FormLabel color="white" fontFamily="roboto" paddingTop={5}>
          Password
        </FormLabel>
        <Input
          errorBorderColor="crimson"
          _placeholder={{ color: 'red.300' }}
          name="password"
          type="password"
          placeholder="password"
        ></Input>

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
    </Container>
  );
};
