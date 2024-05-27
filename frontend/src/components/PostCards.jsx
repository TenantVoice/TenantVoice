import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare, BiChat, BiLike } from 'react-icons/bi';
import { useState } from 'react';
import { Avatar } from "@chakra-ui/react";

const avatarColors = ["#cbd5e0", "#9ae6b4", "#feb2b2", "#81e6d9", "#4fd1c5"];

function getAvatarColor(username) {
    const index = Math.abs(username?.charCodeAt(0) + username.length) % avatarColors.length;
    return avatarColors[index];
};

const GlowingChip = ({ children }) => {
    return (
        <span className="relative z-10 mb-4 pl-4 bg-electric inline-block rounded-full border border-zinc-700 bg-redish px-3 py-1.5 text-xs text-red-900 md:mb-0">
            {children}
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
        </span>
    );
};

const NewPostCard = ({ post }) => {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes((currentLikes) => currentLikes + 1);
    };

    return (
        <div className="card" style={{ backgroundColor: "#34496E", maxWidth: "40rem", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", color: "black", marginBottom: "1rem" }}>
            <div className="card-body" style={{ padding: "16px" }}>
                <div className="flex justify-between items-center">
                    <div className="flex flex-grow items-center">
                        <Link to={`/users/${post.user_id}`}>
                            <Avatar
                                name={post?.username}
                                src={post?.user_picture || 'defaultAvatarUrl'}
                            />
                        </Link>
                        <div>
                            <Link to={`/users/${post.user_id}`}>
                                <h2 className="username" style={{ fontSize: "1.25rem", margin: 0, fontWeight: "bold", color: 'white', letterSpacing: '0.0575rem', }}>{post.username}</h2>
                            </Link>
                            <p style={{ fontSize: "1rem", color: "#A7DADC", margin: 0, letterSpacing: '0.0575rem', }}>is facing a {post.category}</p>
                        </div>
                    </div>
                    <GlowingChip>On going</GlowingChip>
                    <button className="icon-button" style={{ background: "none", border: "none", cursor: "pointer", color: "black" }}>
                        <BsThreeDotsVertical />
                    </button>
                </div>

                <Link to={`/posts/${post.id}`} key={post.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <img src={post.picture || '../weAreOne.jpg'} alt='' style={{ borderRadius: "12px", width: "100%", marginTop: "16px" }} />
                    <p style={{ marginTop: "16px", color: "#FFFFFF" }}>{post.description}</p>
                </Link>

                <hr style={{ borderTop: "1px solid rgba(108, 122, 137, 0.5)", margin: "10px 0" }} />
                <div className="card-footer" style={{ padding: "16px", display: "flex", justifyContent: "space-between" }}>
                    <Link to={`/posts/${post.id}`} key={post.id} style={{ textDecoration: "none", color: "inherit" }}>
                        <button className="icon-button" style={{ background: "none", border: "none", cursor: "pointer", color: "#667a96", display: "flex", alignItems: "center", height: "10px", fontSize: "24px" }}>
                            <BiChat />
                            <span style={{ marginLeft: "8px", fontSize: "24px" }}>Comment</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NewPostCard;