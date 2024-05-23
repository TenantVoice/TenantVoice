import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../adapters/post-adapter";
import { createComment } from "../../adapters/comment-adapter";
import FlyoutNav from "../../components/FlyoutNav";
import { Box, Image, Text, Avatar, Heading, Input, Button, VStack, HStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user-context";
import { getAllCommentByPostId } from "../../adapters/comment-adapter";

export default function HomePage() {
    const [newPosts, setPosts] = useState([]);
    const [comment, setComment] = useState();
    const [userId, setUserId] = useState();
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        getAllPosts().then(setPosts);
        if (currentUser) {
            setUserId(currentUser.id);
        }
    }, [currentUser]);

    useEffect(() => {
        getAllCommentByPostId(id).then(setComments)
    }, [id]);

    const [commentData, setCommentData] = useState('');

    const [errorText, setErrorText] = useState(null);

    const post = newPosts?.find((post) => post.id === parseInt(id));

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorText('');

        if (!commentData) return setErrorText("All fields required");

        console.log(commentData);


        const [newComment, error] = await createComment({ comment: commentData, post_id: id, user_id: currentUser.id });
        console.log(error);
        console.log(newComment)
        if (error) return setErrorText(error.message);
        setComment(newComment);
        setComments(prev => [...prev, newComment]);
        event.target.reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCommentData(value);
    };

    console.log(comments);

    return (
        <Box bg="gray.800" color="white" minHeight="100vh">
            <FlyoutNav />
            <Box maxW="4xl" mx="auto" mt="16" p="4">
                <Box bg="gray.700" p="4" borderRadius="md" shadow="md">
                    <HStack spacing="4" mb="4">
                        <Avatar
                            name={post?.username}
                            src={post?.user_picture || 'defaultAvatarUrl'}
                        />
                        <Text fontSize="lg" fontWeight="bold">{post?.username}</Text>
                    </HStack>
                    <Image
                        src={post?.picture || '/weAreOne.jpg'}
                        alt='Post image'
                        borderRadius="md"
                        mb="4"
                    />
                    <Heading size="md" mb="2">Description:</Heading>
                    <Text fontSize="lg" mb="4">{post?.description}</Text>

                    <Heading size="md" mb="4">Comments:</Heading>
                    <VStack spacing="4" align="start">
                        {comments?.map((comment, index) => (
                            <Box key={index} bg="gray.600" p="4" borderRadius="md" w="full">
                                <HStack spacing="4" mb="2">
                                    <Link to={`/users/${post.user_id}`}>
                                        <Avatar
                                            name={post?.username}
                                            src={post.user_picture || 'defaultAvatarUrl'}
                                        />
                                    </Link>
                                    <Link to={`/users/${post.user_id}`}>
                                        <Text fontWeight="bold">{post.username}</Text>
                                    </Link>
                                </HStack>
                                <Text>{comment.comment}</Text>
                            </Box>
                        ))}
                    </VStack>

                    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                        <VStack spacing="4">
                            <Input
                                type="text"
                                id="comment"
                                name="comment"
                                placeholder="Write your comment here..."
                                onChange={handleChange}
                                bg="gray.700"
                                border="none"
                                focusBorderColor="blue.500"
                            />
                            <Button type="submit" colorScheme="blue">Send</Button>
                        </VStack>
                        {errorText && <Text color="red.500">{errorText}</Text>}
                    </form>
                </Box>
            </Box>
        </Box>
    );
}