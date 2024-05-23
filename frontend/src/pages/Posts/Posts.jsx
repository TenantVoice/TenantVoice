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
  }, []);
  console.log(posts);

  return (

    <>
      <FlyoutNav />
      <div className="bg-oxford">
        <div className="bg-oxford flex pl-10 mt-[60px]">
          <div className="pr-10 z-1000 bg-oxford">
            <ReportForm setPosts={setPosts} />
          </div>
          <div className="absolute top-[50%] left-[50%]">
            <ul className="posts-list">
              {posts?.map((post) => {
                return (
                  <li key={post.id}>
                    <ChakraProvider>
                      <NewPostCard post={post} />
                    </ChakraProvider>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

