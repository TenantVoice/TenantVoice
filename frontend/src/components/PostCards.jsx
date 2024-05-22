// NewPostCard.js
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid, Heading } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import LikesButton from "./LikesButton";
import { getUser } from "../adapters/user-adapter";

const avatarColors = ["blue.200", "green.200", "orange.200", "cyan.200", "teal.200"];

function getAvatarColor(username) {
    const index = Math.abs(username?.charCodeAt(0) + username.length) % avatarColors.length;
    return avatarColors[index];
};

const NewPostCard = ({ post }) => {
    const [likes, setLikes] = useState(0)

    const handleClick = () => {
        setLikes((currentLikes) => currentLikes + 1)
    }

    return (

        <Grid templateColumns="repeat(1, 1fr)" gap={6} justifyContent="center" width="100%" marginLeft="25%" marginTop="16px" marginRight="auto">
            <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                <Flex padding='4' align='center' justify='space-between'>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Link to={`/users/${post.user_id}`}>
                            <Avatar
                                name={post.username}
                                src={post.photo_url || 'defaultAvatarUrl'}
                                bg={getAvatarColor(post.username)}
                            />
                        </Link>

                        <Box>
                            <Link to={`/users/${post.user_id}`}>
                                <Heading size='sm' >{post.username}</Heading>
                            </Link>
                            <Text fontSize='sm' color="red.500" fontStyle="italic" >{post.category}</Text>
                        </Box>
                        <Box>
                            <Heading size='sm' paddingLeft={"3.75rem"} paddingBottom={"0rem"}>Status: Ongoing</Heading>
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
                    {/* //temp photo so i can see  */}
                    <Image
                        src={post.picture || '../weAreOne.jpg'}
                        alt='Post image'
                        fit='cover'
                    />
                    <Box p='4'>
                        <Text mb='4'>{post.description}</Text>
                    </Box>
                </Link>
                <LikesButton />
            </Box>
        </Grid>
    );
};

export default NewPostCard;
