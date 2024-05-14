import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import PostLink from "../components/UserLink";
import FlyoutNav from "../components/FlyoutNav";
import SiteHeadingAndNav from "../components/SiteHeadingAndNav";


export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return <>

    <FlyoutNav />
    <h1>Post</h1>
    <ul>
      {
        posts.map((post) =>
          <li key={post.id}>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            </div>
          </li>)
      }
    </ul>
  </>;
}
