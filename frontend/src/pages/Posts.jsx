import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import ReportForm from "../components/ReportForm"
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
          posts?.map((post) => {
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

