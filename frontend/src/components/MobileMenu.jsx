import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenuLink from "./MobileMenuLink";
import { FiMenu, FiX, FiArr, FiChevronDown, FiChevronRight, FiChevronsDown } from "react-icons/fi";
import CurrentUserContext from "../contexts/current-user-context";
import linksConfig from "../../links.config";



export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div className="block lg:hidden">
            <button onClick={() => setOpen(true)} className="block text-3xl">
                <FiMenu />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
                    >
                        <div className="flex items-center justify-between p-6">
                            <Logo color="black" />
                            <button onClick={() => setOpen(false)}>
                                <FiX className="text-3xl text-neutral-950" />
                            </button>
                        </div>
                        <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
                            {LINKS.map((l) => (
                                <MobileMenuLink
                                    key={l.text}
                                    href={l.href}
                                    FoldContent={l.component}
                                    setMenuOpen={setOpen}
                                >
                                    {l.text}
                                </MobileMenuLink>
                            ))}
                        </div>
                        <div className="flex justify-end bg-neutral-950 p-6">
                            {/* <CTAs /> */}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};