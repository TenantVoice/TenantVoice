import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid, Heading, Card, CardBody, CardFooter, Button, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare, BiChat, BiLike } from 'react-icons/bi';
import { useState } from 'react';

const avatarColors = ["blue.200", "green.200", "orange.200", "cyan.200", "teal.200"];

function getAvatarColor(username) {
    const index = Math.abs(username?.charCodeAt(0) + username.length) % avatarColors.length;
    return avatarColors[index];
};

const GlowingChip = ({ children }) => {
    return (
        <span className="relative z-10 mb-4 pl-4 bg-electric inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-red-900 md:mb-0">
            {children}
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
        </span>
    );
};

const NewPostCard = ({ post }) => {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes((currentLikes) => currentLikes + 1);
    };

    return (
        <Card bg={useColorModeValue("white", "#001D4A")} maxW="70rem" boxShadow="lg" borderRadius="lg">
            <CardBody>
                <Flex align="center" justify="space-between">
                    <Flex align="center">
                        <Link to={`/users/${post.user_id}`}>
                            <Avatar name={post.username} src={post.user_picture || 'defaultAvatarUrl'} bg={getAvatarColor(post.username)} />
                        </Link>
                        <Box ml="3">
                            <Link to={`/users/${post.user_id}`}>
                                <Heading size="md" color={useColorModeValue("gray.800", "white")}>{post.username}</Heading>
                            </Link>
                            <Text fontSize="sm" color="red.400">is facing a {post.category} problem</Text>
                        </Box>
                        <GlowingChip>Ongoing</GlowingChip>
                    </Flex>
                    <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <Image src={post.picture || '../weAreOne.jpg'} alt='Post image' borderRadius="lg" my="4" />
                    <Text color={useColorModeValue("gray.800", "white")}>{post.description}</Text>
                </Link>
            </CardBody>
        </Card>
    );
};

export default NewPostCard;