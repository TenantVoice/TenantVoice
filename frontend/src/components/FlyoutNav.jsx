import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import CurrentUserContext from "../contexts/current-user-context";
import UsersLogo from "./usersLogo";

export default function FlyoutNav({ setCurrentUser }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250);
    });

    const { currentUser } = useContext(CurrentUserContext);
    const isLandingPage = location.pathname === '/';
    const navBg = isLandingPage
        ? (scrolled ? "bg-oxford py-3 shadow-lg" : "bg-transparent py-5 shadow-none")
        : "bg-oxford py-3 shadow-lg";

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            <nav className={`fixed top-0 z-50 w-full px-4 lg:px-8 text-white transition-all duration-300 ease-out ${navBg}`}>
                <div className="container mx-auto flex items-center justify-between">
                    <NavLink to='/' className="font-bold text-lg text-lightBlue">
                        TenantVoice
                    </NavLink>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center space-x-6">
                        <li>
                            <NavLink
                                to='/posts'
                                className={({ isActive }) =>
                                    `transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-white"}`
                                }
                            >
                                Posts
                            </NavLink>
                        </li>
                        {currentUser ? (
                            <>
                                <li>
                                    <NavLink
                                        to='/Data'
                                        className={({ isActive }) =>
                                            `transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-white"}`
                                        }
                                        end
                                    >
                                        Data
                                    </NavLink>
                                </li>
                                <li>
                                    <UsersLogo currentUser={currentUser} setCurrentUser={setCurrentUser} />
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) =>
                                            `transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-white"}`
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/sign-up'
                                        className="bg-electric hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white text-2xl p-1"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <FiMenu />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/60"
                            onClick={closeMobile}
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed right-0 top-0 z-50 h-full w-72 bg-oxford flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between p-5 border-b border-shade">
                                <NavLink to='/' onClick={closeMobile} className="font-bold text-lg text-lightBlue">
                                    TenantVoice
                                </NavLink>
                                <button onClick={closeMobile} className="text-white text-2xl" aria-label="Close menu">
                                    <FiX />
                                </button>
                            </div>

                            <ul className="flex flex-col p-6 space-y-5 flex-1">
                                <li>
                                    <NavLink
                                        to='/posts'
                                        onClick={closeMobile}
                                        className={({ isActive }) =>
                                            `block text-lg transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-slate-200"}`
                                        }
                                    >
                                        Posts
                                    </NavLink>
                                </li>
                                {currentUser ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to='/Data'
                                                onClick={closeMobile}
                                                className={({ isActive }) =>
                                                    `block text-lg transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-slate-200"}`
                                                }
                                            >
                                                Data
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={`/users/${currentUser.id}/profile`}
                                                onClick={closeMobile}
                                                className="block text-lg text-slate-200 hover:text-lightBlue transition-colors"
                                            >
                                                My Profile
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink
                                                to='/login'
                                                onClick={closeMobile}
                                                className={({ isActive }) =>
                                                    `block text-lg transition-colors hover:text-lightBlue ${isActive ? "text-lightBlue font-semibold" : "text-slate-200"}`
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/sign-up'
                                                onClick={closeMobile}
                                                className="block w-full text-center bg-electric hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
                                            >
                                                Sign Up
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
