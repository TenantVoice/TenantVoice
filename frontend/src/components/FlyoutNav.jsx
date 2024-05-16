import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useScroll, useMotionValueEvent } from 'framer-motion';
import CurrentUserContext from "../contexts/current-user-context";
import UsersLogo from "./usersLogo";

export default function FlyoutNav({ setCurrentUser }) {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250);
    });

    const { currentUser } = useContext(CurrentUserContext);
    const isLandingPage = location.pathname === '/';

    return (
        <nav className={`fixed top-0 z-50 w-full px-4 lg:px-8 text-white transition-all duration-300 ease-out ${isLandingPage ? (scrolled ? "bg-neutral-800 py-3 shadow-lg" : "bg-transparent py-5 shadow-none") : "bg-neutral-800 py-3 shadow-lg"
            }`}>
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to='/' className="font-bold text-lg">
                    TenantVoice
                </NavLink>
                <ul className="flex items-center space-x-4">
                    <li><NavLink to='/home' className="hover:text-gray-300">Home</NavLink></li>
                    {currentUser ? (
                        <>
                            <li><NavLink to='/users' className="hover:text-gray-300" end>Users</NavLink></li>
                            <li><UsersLogo currentUser={currentUser} setCurrentUser={setCurrentUser} /></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to='/login' className="hover:text-gray-300">Login</NavLink></li>
                            <li><NavLink to='/sign-up' className="hover:text-gray-300">Sign Up</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
