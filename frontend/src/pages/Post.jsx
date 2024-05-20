import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPosts } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { Box, Flex, Avatar, Heading, Text, IconButton, Image, Button, Grid } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { fetchHandler } from "../utils";

export default function PostPage() {

    const [post, setCurrentPost] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await getPosts()
            if (error) return setError(error.message);
            setCurrentPost(data);
            console.log(data);
        }

        doFetch();
    }, [])


    return <>

        <FlyoutNav />
        <div className="flex pl-10 mt-[60px]">
            <Box key={post.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m="4">
                <Flex padding='4' align='center' justify='space-between'>
                    <Flex flex='1' gap='4' alignItems='center'>
                        <Avatar name={post.user} src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <Heading size='sm'>{post.user}</Heading>
                            <Text fontSize='sm'>Housing Complex Name here (TI)</Text>
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
                    src={post.image || 'https://images.unsplash.com/photo-1531403009284-440f080d1e12'}
                    alt='Post image'
                    fit='cover'
                />
                <Box p='4'>
                    <Heading size='md' mb='2'>{post.category}</Heading>
                    <Text mb='4'>{post.description}</Text>
                    {/* //this is the like/share/coimment/buttons vv */}
                    {/* <Flex justify='space-between'>
                        <Button flex='1' variant='ghost' leftIcon={<BiLike />}>Like</Button>
                        <Button flex='1' variant='ghost' leftIcon={<BiChat />}>Comment</Button>
                        <Button flex='1' variant='ghost' leftIcon={<BiShare />}>Share</Button>
                    </Flex> */}
                </Box>
            </Box>
        </div>
    </>

}
