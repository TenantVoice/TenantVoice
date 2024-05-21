import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Avatar } from '@chakra-ui/react';

export default function HomePage() {
    const [newPosts, setPosts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const post = newPosts?.find((post) => post.id === parseInt(id));
    console.log(post);

    return (
        <>
            <FlyoutNav />
            <div className="flex justify-center mt-16">
                <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Avatar
                            name={post?.username}
                            src={post?.user_picture || 'defaultAvatarUrl'}
                            className="mr-4"
                        />
                        <Text className="text-lg font-semibold">{post?.username}</Text>
                    </div>

                    <div className="mb-4">
                        <Image
                            src={post?.picture || '/weAreOne.jpg'}
                            alt='Post image'
                            className="w-full h-auto rounded-lg"
                            fit='cover'
                        />
                    </div>
                    <Box p='4'>
                        <Text mb='4' className="text-lg font-semibold">{post?.description}</Text>
                    </Box>
                    <div className="mt-8">
                        <div className="mb-6">
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                                Add a comment
                            </label>
                            <input
                                type="text"
                                id="comment"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your comment here..."
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Comments</h2>
                        <div className="space-y-4">
                            {post?.comments?.map((comment, index) => (
                                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-700 font-semibold">{comment.username}</p>
                                    <p className="mt-2 text-gray-900">{comment.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}