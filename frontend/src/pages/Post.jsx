import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { useParams } from "react-router-dom";
import { Box, Image, Text } from '@chakra-ui/react'

export default function HomePage() {
    const [newPosts, setPosts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const post = newPosts?.find((post) => post.id === parseInt(id));
    console.log(post);

    return <>
        <FlyoutNav />
        <div className="flex pl-10 mt-[60px]">
            <div>
                <>
                    <Image
                        src={post?.picture || '/weAreOne.jpg'}
                        alt='Post image'
                        fit='cover'
                    />
                    <Box p='4'>
                        <Text mb='4'>{post?.description}</Text>
                    </Box>
                </>

            </div>
        </div>
    </>;
}
