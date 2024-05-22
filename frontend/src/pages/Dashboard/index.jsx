import { useContext, useState, useEffect } from "react";
import { getAllPosts } from "../../adapters/post-adapter";
import PostCard from "../../components/PostCards";
import CurrentUserContext from "../../contexts/current-user-context";
import FlyoutNav from "../../components/FlyoutNav";


const Dashboard = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    // const filteredPost = posts?.find((post) => post.user_id === currentUser?.id);
    console.log(posts)
    return (
        <div>
            <FlyoutNav />
            <PostCard post={posts} />
        </div>
    )
}

export default Dashboard;