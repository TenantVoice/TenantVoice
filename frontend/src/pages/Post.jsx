import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { Box, Flex, Avatar, Heading, Text, IconButton, Image } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getAllPosts } from "../adapters/post-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function PostPage({ posts }) {
    const { id } = useParams();
    const [newPosts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const post = newPosts.filter((post) => post.id === parseInt(id))
    console.log(post);

    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Loading...</div>;

    return (
        <>
            <FlyoutNav />
            <div className="flex pl-10 mt-[60px]">
                <Box key={post[0]?.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                    <Flex padding='4' align='center' justify='space-between'>
                        <Flex flex='1' gap='4' alignItems='center'>
                            <Avatar name={posts[?.username} src={posts[0]?.picture || 'defaultAvatarUrl'} />
                            <Box>
                                <Heading size='sm'>{post[0]?.username}</Heading>
                                <Text fontSize='sm'>{post[0]?.problem_duration}</Text>
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
                        src={post[0]?.picture || 'defaultImageURL'}
                        alt='post image'
                        fit='cover'
                    />
                    <Box p='4'>
                        <Heading size='md' mb='2'>{post[0]?.category}</Heading>
                        <Text mb='4'>{post[0]?.description}</Text>
                    </Box>
                </Box>
            </div>
        </>
    );
}
