import { BiThreeDotsVertical, BiLike, BiChat, BiShare } from 'react-icons/bi';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Avatar,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const Post = () => {
  return (
   
    <Card maxWidth='md'>
      <CardHeader>
        <Flex alignItems='center' flexWrap='wrap'>
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

          <Box ml='3'>
            <Heading as='h3' size='sm'>Segun Adebayo</Heading>
            <Text>Creator, Chakra UI</Text>
          </Box>

          <IconButton
            ml='auto'
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BiThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the speed
          of design. I wanted the developer to be just as excited as the designer to
          create a screen.
        </Text>
      </CardBody>
      <Box>
        <img
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </Box>
      <CardFooter justify='space-between'>
        <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Post;
