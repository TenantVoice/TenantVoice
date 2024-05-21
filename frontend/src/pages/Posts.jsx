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
      <ChakraProvider>
        <NewPostCard posts={posts} />
      </ChakraProvider>

    </div>
  </>;
}

