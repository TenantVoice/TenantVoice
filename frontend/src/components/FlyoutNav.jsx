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
        <nav className={`fixed top-0 z-50 w-full px-4 lg:px-8 text-white transition-all duration-300 ease-out ${isLandingPage ? (scrolled ? "bg-oxford py-3 shadow-lg" : "bg-transparent py-5 shadow-none") : "bg-oxford py-3 shadow-lg"
            }`}>
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to='/' className="font-bold text-lg text-lightBlue">
                    TenantVoice
                </NavLink>
                <ul className="flex items-center space-x-4">
                    <li><NavLink to='/posts' className=" transition-colors hover: rounded border-indigo-600 hover:bg-indigo-600 text-white">Posts</NavLink></li>
                    {currentUser ? (
                        <>
                            <li><NavLink to='/data' className="htransition-colors hover: rounded border-indigo-600 hover:bg-indigo-600 text-whit" end>Data</NavLink></li>
                            <li><UsersLogo currentUser={currentUser} setCurrentUser={setCurrentUser} /></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to='/login' className="hover:text-radish">Login</NavLink></li>
                            <li><NavLink to='/sign-up' className="hover:text-radish">Sign Up</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
