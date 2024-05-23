import { useEffect, useState } from "react";
import { getAllPosts } from "../../adapters/post-adapter";
import FlyoutNav from "../../components/FlyoutNav";
import ReportForm from "../../components/ReportForm";
import { ChakraProvider } from '@chakra-ui/react';
import NewPostCard from "../../components/PostCards";
import "./postsPg.css";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
      // Extract unique categories from posts
      const uniqueCategories = [...new Set(posts.map(post => post.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="h-full">
      <FlyoutNav />
      <div className="flex flex-col items-center min-h-screen">
        <div className="sticky top-[5rem] flex ml-[102%] w-full z-50">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="dropdown bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 text-white-700 py-2 px-4 rounded"
          >
            <option value="all" className="text-white">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-oxford flex pt-10 justify-items-center w-full">
          <div className="ml-[40px] z-10">
            <ReportForm setPosts={setPosts} />
          </div>
          <div>
            <div>
              <ul className="p-10 sticky z-10 pt-[3rem]">
                {filteredPosts.map((post) => (
                  <li key={post.id} className="mb-20 w-[100%] ml-[30%] z-10">
                    <ChakraProvider>
                      <NewPostCard post={post} />
                    </ChakraProvider>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
