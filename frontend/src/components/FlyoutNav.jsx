import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useScroll, useMotionValueEvent } from 'framer-motion';
import CurrentUserContext from "../contexts/current-user-context";
// import MobileMenu from "./MobileMenu";
// import linksConfig from "../../links.config";


export default function FlyoutNav() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250);
    });

    const { currentUser } = useContext(CurrentUserContext);

    return (

        <nav className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 ${scrolled ? "bg-neutral-950 py-3 shadow-xl" : "bg-transparent py-6 shadow-none"
            }`}>
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <div className="flex-grow">
                    <ul className="flex justify-end space-x-4">
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
    );
}
