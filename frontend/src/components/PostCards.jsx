//// trying Chakra :

import { Box, Flex, Avatar, Heading, Text, IconButton, Image, Button, Grid } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import CurrentUserContext from '../contexts/current-user-context';
import { useContext } from 'react';

const NewPostCard = ({ posts }) => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return (
        <Grid templateColumns="1fr 1fr" gap={6}>
            <Box> {/* Left column empty or for other content */}
            </Box>
            <Box> {/* Right column for posts */}
                {posts.map(post => (
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
                ))}
            </Box>
        </Grid>
    );
};

export default NewPostCard;


// const PostCard = ({ posts }) => {

//     return (
//         <div className="mx-auto max-w-full">
//             <ul>
//                 {
//                     posts?.map((post) =>
//                         <li key={post.id} className="m-10">
//                             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                                 <a href="#">
//                                     <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//                                 </a>
//                                 <div class="p-5">
//                                     <a href="#">
//                                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.category}</h5>
//                                     </a>
//                                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
//                                     <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                         Read more
//                                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>
//                         </li>)
//                 }
//             </ul>
//         </div>
//     )

// }

// export default PostCard;
