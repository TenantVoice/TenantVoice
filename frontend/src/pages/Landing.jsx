import React from "react";
import { useContext, useState } from "react";
// import { useNavigate, Navigate, Link } from "react-router-dom";
import Card from "../components/Cards";
import '../landing.css';
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
    useMotionValueEvent,
    AnimatePresence,
    useScroll,
    motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import FlyoutNav from "../components/FlyoutNav";
// import MobileMenu from "../components/MobileMenu";
import { ColorChangeCards, Cards } from "../components/LandingCards";
import { CountUpStats } from "../components/Stats";
import CardCarousel from "../components/Carousel";

export default function Example() {
    return (
        <>
            <FlyoutNav />

            <div
                className="relative min-h-screen"
                style={{
                    backgroundImage: "url(../news-articles.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />
            </div>
            <CountUpStats />
            <div className="content-container" style={{ padding: '20px' }}>

                <div className="cards-container" style={{ marginTop: '20px' }}>
                    <div className="missionStatement">
                        <h2> Who we are</h2>
                        <p> Tenant voice does xyz</p>
                    </div>
                    < CardCarousel />
                </div>

            </div>
        </>
    );
};
