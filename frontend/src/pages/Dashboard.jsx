import { useContext, useState, useEffect } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import PostCard from "../components/PostCards";
import CurrentUserContext from "../contexts/current-user-context";
import FlyoutNav from "../components/FlyoutNav";


const Dashboard = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, [posts]);

    const filteredPost = posts.filter((post) => post.id == currentUser.id);

    return (

        <div>
            <div>
                <FlyoutNav />
            </div>
            <PostCard posts={filteredPost} />
        </div>

    )
}

export default Dashboard;