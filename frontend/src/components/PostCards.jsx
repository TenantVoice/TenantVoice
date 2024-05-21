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
                    <Link to={`/posts/${post.id}`} key={post.id}>
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
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-600">
                            <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                            <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                        </svg>
                        <span>283</span>
                    </button>
                </Box>
            ))}
        </Grid>
    );
};

export default NewPostCard;
