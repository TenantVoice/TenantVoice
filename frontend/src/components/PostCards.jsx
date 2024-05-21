// NewPostCard.js
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const NewPostCard = ({ posts }) => {
    return (
        <Grid templateColumns="1fr 1fr" gap={6}>
            {posts.map(post => (
                <Link to={`/home/${post.id}`} key={post.id}>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                        <Flex padding='4' align='center' justify='space-between'>
                            <Flex flex='1' gap='4' alignItems='center'>
                                <Avatar name={post.username} src={post.photo_url || 'defaultAvatarUrl'} />
                                <Box>
                                    <Text fontSize='sm'>{post.problem_duration}</Text>
                                </Box>
                            </Flex>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<BsThreeDotsVertical />}
                            />
                        </Flex>
                        <Image
                            src={post.image || 'defaultImageURL'}
                            alt='Post image'
                            fit='cover'
                        />
                        <Box p='4'>
                            <Text mb='4'>{post.description}</Text>
                        </Box>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
};

export default NewPostCard;
