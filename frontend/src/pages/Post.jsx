import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { Box, Flex, Avatar, Heading, Text, IconButton, Image } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const [data, error] = await getPostById(id);
            if (error) return setError(error.message);
            console.log(`this is data for individual post: ${data}`)
            setPost(data);
        };

        fetchPost();
    }, [id]);

    console.log(post);

    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Loading...</div>;

    return (
        <>
            <FlyoutNav />
            <div className="flex pl-10 mt-[60px]">
                <Box key={post.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                    <Flex padding='4' align='center' justify='space-between'>
                        <Flex flex='1' gap='4' alignItems='center'>
                            <Avatar name={post.user} src={post.photo_url || 'defaultAvatarUrl'} />
                            <Box>
                                <Heading size='sm'>{post.user}</Heading>
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
                        <Heading size='md' mb='2'>{post.category}</Heading>
                        <Text mb='4'>{post.description}</Text>
                    </Box>
                </Box>
            </div>
        </>
    );
}
