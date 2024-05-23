import { useEffect, useState } from "react";
import { getAllPosts } from "../../adapters/post-adapter";
import FlyoutNav from "../../components/FlyoutNav";
import ReportForm from "../../components/ReportForm"
import { ChakraProvider } from '@chakra-ui/react'
import NewPostCard from "../../components/PostCards";
import "./postsPg.css"

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, [])

  return (
    <>
      {/* <FlyoutNav />
      <div className="bg-oxford" style={{ paddingTop: '70px', display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
        <div className="border-4" style={{ flex: 1, display: 'flex', justifyContent: 'end' }}>
          <ReportForm setPosts={setPosts} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ul className="posts-list" style={{ width: '100%' }}>
            {posts.map((post) => (
              <li key={post.id}>
                <ChakraProvider>
                  <NewPostCard post={post} />
                </ChakraProvider>
              </li>
            ))}
          </ul>
        </div>
      </div > */}



      <FlyoutNav />
      <div className="bg-oxford flex pt-10 justify-items-center">
        <div className="ml-[40px]">
          <ReportForm setPosts={setPosts} />
        </div>
        <div>
          <ul className="p-10">
            {posts.map((post) => (
              <li key={post.id} className="mb-20 w-[100%] ml-[30%]">
                <ChakraProvider>
                  <NewPostCard post={post} />
                </ChakraProvider>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};
