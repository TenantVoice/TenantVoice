import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import PostLink from "../components/UserLink";
import FlyoutNav from "../components/FlyoutNav";
import SiteHeadingAndNav from "../components/SiteHeadingAndNav";
import ReportForm from "../components/ReportForm"
import PostCard from "../components/PostCards";
import { ChakraProvider } from '@chakra-ui/react'
import NewPostCard from "../components/PostCards";


export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);
  console.log(posts);

  return <>

    <FlyoutNav />
    <div className="flex pl-10 mt-[60px]">
      <div className="pr-10">
        <ReportForm setPosts={setPosts} />
      </div>
      <ul className="posts-list">
        {
          posts.map((post) => {
            return <li key={post.id}>
              <ChakraProvider>
                <NewPostCard post={post} />
              </ChakraProvider>
            </li>
          })
        }
      </ul>
    </div >
  </>;
}

//trying modal:

// import { useState, useEffect } from 'react';
// import { getAllPosts } from "../adapters/post-adapter";

// import { ChakraProvider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Button } from '@chakra-ui/react';
// import NewPostCard from '../components/PostCards';
// import ReportForm from '../components/ReportForm';
// import FlyoutNav from '../components/FlyoutNav';

// export default function HomePage() {
//   const [posts, setPosts] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     getAllPosts().then(setPosts);
//   }, []);

//   return (
//     <ChakraProvider>
//       <FlyoutNav />
//       <div className="flex pl-10 mt-[60px]">
//         <Button onClick={onOpen} position="fixed" top="20px" right="20px">Report Issue</Button>
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Report an Issue</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <ReportForm setPosts={setPosts} onClose={onClose} />
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//         <NewPostCard posts={posts} />
//       </div>
//     </ChakraProvider>
//   );
// }
