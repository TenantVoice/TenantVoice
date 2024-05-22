import React from "react";
import FlyoutNav from "../../components/FlyoutNav";
import { CountUpStats } from "../../components/Stats";
import CardCarousel from "../../components/Carousel";
import WaterDropHero from "../../components/HeroText";

export default function Example() {
    return (
        <>
            <FlyoutNav />
            <WaterDropHero />
            <CountUpStats />
            <div className="content-container" style={{ padding: '20px' }}>
                <div className="cards-container" style={{ marginTop: '20px' }}>
                    <div className="bg-indigo">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-oxford sm:text-6xl">We know that safe housing is a human right</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        </div>
                    </div>
                    < CardCarousel />
                </div>
            </div>
        </>
    );
};
