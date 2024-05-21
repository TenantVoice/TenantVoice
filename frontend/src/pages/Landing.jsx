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
import WaterDropHero from "../components/HeroText";
export default function Example() {
    return (
        <>
            <FlyoutNav />

            {/* <div
                className="relative min-h-screen"
                style={{
                    backgroundImage: "url(../news-articles.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />
            </div> */}
            <WaterDropHero />
            <CountUpStats />
            <div className="content-container" style={{ padding: '20px' }}>



                <div className="cards-container" style={{ marginTop: '20px' }}>

                    <div class="bg-indigo">
                        <div class="mx-auto max-w-2xl lg:mx-0">
                            <h2 class="text-4xl font-bold tracking-tight text-oxford sm:text-6xl">We know that safe housing is a human right</h2>
                            <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        </div>


                    </div>
                    < CardCarousel />
                </div>

            </div>
        </>
    );
};

{/* <ColorChangeCards /> */ }
{/* <Cards
                        heading="Our Mission"
                        description="TenantVoice aims to enhance public housing by providing a platform for tenants to report issues and collaborate with neighbors, promoting accountability and empowering advocacy."
                        imgSrc="../weAreOne.jpg"
                    />
                    <Cards
                        heading="The Problem"
                        description="Public housing residents often endure unresolved maintenance issues that degrade living conditions and pose health risks. Without a platform to unite and voice their concerns, tenants struggle to communicate and take collective action to demand improvements."
                        imgSrc="../ambulance.jpg"

                    />
                    <Cards
                        heading="What You Can Do"
                        description={
                            <ul>
                                <li><strong>Report:</strong> Post about housing issues, include the category of the problem and how long it's been going on for.</li>
                                <li><strong>Magnitude:</strong> View data visuals detailing housing issues locally and across NYCHA.</li>
                                <li><strong>Community:</strong> Two separate feeds show posts from your own complex and from all NYCHA residents.</li>
                            </ul>
                        }
                        imgSrc="../protester.jpg"

                    /> */}