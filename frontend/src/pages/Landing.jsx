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



export default function Example() {
    return (
        <>
            <FlyoutNav />
            <div
                className="relative min-h-screen"
                style={{
                    backgroundImage: "url(../famAtBeach.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />
            </div>

            <div className="content-container" style={{ padding: '20px' }}>


                <h1>TenantVoice</h1>
                <div className="cards-container" style={{ marginTop: '20px' }}>
                    <Card
                        title="Our Mission"
                        details="TenantVoice aims to enhance public housing by providing a platform for tenants to report issues and collaborate with neighbors, promoting accountability and empowering advocacy."
                    />
                    <Card
                        title="The Problem"
                        details="Public housing residents often endure unresolved maintenance issues that degrade living conditions and pose health risks. Without a platform to unite and voice their concerns, tenants struggle to communicate and take collective action to demand improvements."
                    />
                    <Card
                        title="What You Can Do"
                        details={
                            <ul>
                                <li><strong>Report:</strong> Post about housing issues, include the category of the problem and how long it's been going on for.</li>
                                <li><strong>Magnitude:</strong> View data visuals detailing housing issues locally and across NYCHA.</li>
                                <li><strong>Community:</strong> Two separate feeds show posts from your own complex and from all NYCHA residents.</li>
                            </ul>
                        }
                    />
                </div>
            </div>
        </>
    );
}