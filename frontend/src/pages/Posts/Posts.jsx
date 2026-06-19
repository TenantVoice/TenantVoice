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
      const uniqueCategories = [...new Set(posts.map(post => post.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-oxford">
      <FlyoutNav />

      <div className="pt-20 px-4 md:px-6 lg:px-8">
        {/* Page header + category filter */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 border-b border-shade">
          <h1 className="text-white text-2xl font-bold">Community Reports</h1>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-shade border border-gray-600 text-white py-2 px-4 rounded text-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-electric"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Two-column layout: form sidebar + posts feed */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 py-8">

          {/* Report form — full width on mobile, sticky sidebar on lg+ */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ReportForm setPosts={setPosts} />
            </div>
          </aside>

          {/* Posts feed */}
          <section className="flex-1 min-w-0">
            {filteredPosts.length === 0 ? (
              <p className="text-slate-400 text-center mt-16 text-lg">No posts found.</p>
            ) : (
              <ul className="space-y-6">
                {filteredPosts.map((post) => (
                  <li key={post.id}>
                    <ChakraProvider>
                      <NewPostCard post={post} />
                    </ChakraProvider>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
