// NewPostCard.js
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid, Heading } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';


// for specific avatar colors 
const avatarColors = ["blue.200", "green.200", "orange.200", "cyan.200", "teal.200"];

function getAvatarColor(username) {
    const index = Math.abs(username.charCodeAt(0) + username.length) % avatarColors.length;
    return avatarColors[index];
};

const NewPostCard = ({ posts }) => {
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={6} justifyContent="center" width="50%" marginLeft="25%" marginTop="16px" marginRight="auto">
            {posts.map(post => (
                <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                    <Flex padding='4' align='center' justify='space-between'>
                        <Flex flex='1' gap='4' alignItems='center'>

                            {/* //commenting this out so i can try custom bg color vv */}
                            {/* <Avatar name={post.username} src={post.photo_url || 'defaultAvatarUrl'} /> */}
                            <Avatar
                                name={post.username}
                                src={post.photo_url || 'defaultAvatarUrl'}
                                bg={getAvatarColor(post.username)} // Assign color based on username
                            />

                            <Box>
                                <Heading size='sm' >{post.username}</Heading>
                                <Text fontSize='sm' color="red.500" fontStyle="italic" >{post.category}</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                    <Link to={`/home/${post.id}`} key={post.id}>
                        {/* //temp photo so i can see  */}
                        <Image
                            src={post.image || '../weAreOne.jpg'}
                            alt='Post image'
                            fit='cover'
                        />
                        <Box p='4'>
                            <Text mb='4'>{post.description}</Text>
                        </Box>
                    </Link>
                </Box>
            ))}
        </Grid>
    );
};

export default NewPostCard;
