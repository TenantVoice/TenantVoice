// NewPostCard.js
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid, Heading } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const NewPostCard = ({ posts }) => {
    return (
        <Grid templateColumns="1fr 1fr" gap={6}>
            {posts.map(post => (
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                    <Flex padding='4' align='center' justify='space-between'>
                        <Flex flex='1' gap='4' alignItems='center'>
                            {console.log(post.user_picture)}
                            <Avatar name={post.username} src={post.user_picture || 'defaultAvatarUrl'} />
                            <Box>
                                <Heading size='sm'>{post.username}</Heading>
                                <Text fontSize='sm' >{post.category}</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <Image
                            src={post.picture || 'defaultImageURL'}
                            alt='Post image'
                            fit='cover'
                        />
                        <Box p='4'>
                            <Text mb='4'>{post.description}</Text>
                        </Box>
                    </Link>
                </Box>
            ))
            }
        </Grid >
    );
};

export default NewPostCard;
