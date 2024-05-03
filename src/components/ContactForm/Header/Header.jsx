import { Avatar, Container, Text} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

export const Header = ({name}) => {
    return (
        <Container width='100%' maxW='1200px' display='flex' alignItems='center' justifyContent='space-between' padding={2}>
            <Text fontFamily='roboto' fontSize='2xl'>Welcome {name},</Text>
            <div>
          <Avatar name='' />
          <ChakraLink
            as={ReactRouterLink}
            color="black"
            fontSize="24px"
                    to="/"
                    marginLeft={5}
          >
            Logout
                </ChakraLink>
                </div>
    </Container>
  )
}
