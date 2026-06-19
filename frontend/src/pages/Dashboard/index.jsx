import { useContext, useState, useEffect } from "react";
import { getAllPosts } from "../../adapters/post-adapter";
import NewPostCard from "../../components/PostCards";
import CurrentUserContext from "../../contexts/current-user-context";
import FlyoutNav from "../../components/FlyoutNav";
import { ChakraProvider, Avatar } from "@chakra-ui/react";

const Dashboard = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const userPosts = posts.filter((post) => post.user_id === currentUser?.id);

    return (
        <ChakraProvider>
            <div className="min-h-screen bg-oxford">
                <FlyoutNav />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12">
                    {/* Profile header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Avatar
                            name={currentUser?.username}
                            src={currentUser?.picture}
                            size="xl"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-white">{currentUser?.username}</h1>
                            <p className="text-slate-400">{userPosts.length} report{userPosts.length !== 1 ? 's' : ''} submitted</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-white mb-4">Your Reports</h2>

                    {userPosts.length === 0 ? (
                        <p className="text-slate-400 mt-6">You haven't submitted any reports yet.</p>
                    ) : (
                        <ul className="space-y-6">
                            {userPosts.map((post) => (
                                <li key={post.id}>
                                    <NewPostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </ChakraProvider>
    );
};

export default Dashboard;
