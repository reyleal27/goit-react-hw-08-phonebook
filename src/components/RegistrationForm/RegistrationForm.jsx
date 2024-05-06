import { FormLabel, Button, Text, Input } from '@chakra-ui/react';
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
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <FormLabel
        color="white"
        fontFamily="roboto"
        display="flex"
        flexDirection={'column'}
      >
        Name
        <Input
          name="name"
          width={350}
          errorBorderColor="crimson"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          placeholder="Your name"
          _placeholder={{ color: 'red.300' }}
          required
        />
      </FormLabel>

      <FormLabel color="white" fontFamily="roboto" paddingTop={5}>
        Email
        <Input
          errorBorderColor="crimson"
          type="email"
          name="email"
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
  );
};
