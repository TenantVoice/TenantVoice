import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import FlyoutNav from "../components/FlyoutNav";
import { useParams } from "react-router-dom";


export default function HomePage() {
    const [newPosts, setPosts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    const posts = newPosts?.filter((post) => post.id === parseInt(id));
    console.log(posts);
    return <>
        <FlyoutNav />
        <div className="flex pl-10 mt-[60px]">
            <ul>
                <li>
                    {posts.username}
                </li>
            </ul>
        </div>
    </>;
}
