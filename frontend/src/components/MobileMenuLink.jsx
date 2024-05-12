import React from "react";
import { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import linksConfig from "../../links.config";
import { motion, useMeasure } from "react-use-measure"
import CurrentUserContext from "../contexts/current-user-context";

export default function MobileMenuLink({ children, href, FoldContent, setMenuOpen }) {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    const { currentUser } = useContext(CurrentUserContext);
    const LINKS = linksConfig(currentUser);

    return (
        <div className="relative text-neutral-950">
            {FoldContent ? (
                <div
                    className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
                    onClick={() => setOpen((pv) => !pv)}
                >
                    <a
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(false);
                        }}
                        href={href}
                    >
                        {children}
                    </a>
                    <motion.div
                        animate={{ rotate: open ? "180deg" : "0deg" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <FiChevronDown />
                    </motion.div>
                </div>
            ) : (
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                    }}
                    href="#"
                    className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
                >
                    <span>{children}</span>
                    <FiArrowRight />
                </a>
            )}
            {FoldContent && (
                <motion.div
                    initial={false}
                    animate={{
                        height: open ? height : "0px",
                        marginBottom: open ? "24px" : "0px",
                        marginTop: open ? "12px" : "0px",
                    }}
                    className="overflow-hidden"
                >
                    <div ref={ref}>
                        <FoldContent />
                    </div>
                </motion.div>
            )}
        </div>
    );
};
