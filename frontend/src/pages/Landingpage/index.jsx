import React from "react";
import FlyoutNav from "../../components/FlyoutNav";
import CardCarousel from "../../components/Carousel";
import WaterDropHero from "../../components/HeroText";
import { Blockquote } from "flowbite-react";


export default function Example() {
    return (
        <>
            <FlyoutNav />
            <WaterDropHero />
            {/* <CountUpStats /> */}
            <div className="content-container" style={{ padding: '20px' }}>
                <div className="cards-container" style={{ marginTop: '20px' }}>
                    <div className="bg-indigo">
                        <div className="mx-auto lg:mx-0 w-full px-4 lg:px-16 pb-8">
                            <h2 className="text-4xl font-bold tracking-tight text-oxford sm:text-6xl">We know that safe housing is a human right</h2>
                            <ul className="mt-6 text-lg leading-8 text-slate-700">
                                <li>Public housing complexes face maintenance issues that NYCHA does not address.</li>
                                <li>It takes NYCHA on average 370 days to complete repairs, and that number is rising.</li>
                                <li>Leaving NYCHA residents fed up and with their health and safety at risk.</li>
                            </ul>
                        </div>

                        <figure className="mx-auto max-w-screen-md text-center pb-8">
                            <svg
                                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <Blockquote>
                                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                                    "No one should have to live like this. We're not second-class citizens"
                                </p>
                            </Blockquote>
                            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">Kicha Cruz</cite>
                                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">NYCHA Tenant for 17 years</cite>
                                </div>
                            </figcaption>
                        </figure>

                    </div>
                    < CardCarousel />
                </div>
            </div>
        </>
    );
};