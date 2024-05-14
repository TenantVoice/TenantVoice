import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useScroll, useMotionValueEvent } from 'framer-motion';
import CurrentUserContext from "../contexts/current-user-context";


export default function FlyoutNav() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250);
    });

    const { currentUser } = useContext(CurrentUserContext);
    const isLandingPage = location.pathname === '/';

    return (
        <nav className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 ${isLandingPage ? (scrolled ? "bg-neutral-950 py-3 shadow-xl" : "bg-transparent py-6 shadow-none") : "bg-neutral-950 py-3 shadow-xl"
            }`}>
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <NavLink to='/' className="flex items-center">
                    <span className="font-bold text-lg">TenantVoice</span>
                </NavLink>
                <div className="flex-grow">
                    <ul className="flex justify-end items-center space-x-4">
                        <li><NavLink to='/home' className="nav-link">Home</NavLink></li>
                        {currentUser ? (
                            <>
                                <li><NavLink to='/users' className="nav-link" end={true}>Users</NavLink></li>
                                <li><NavLink to={`/users/${currentUser.id}`} className="nav-link">{currentUser.username}</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to='/login' className="nav-link">Login</NavLink></li>
                                <li><NavLink to='/sign-up' className="nav-link">Sign Up</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
};
