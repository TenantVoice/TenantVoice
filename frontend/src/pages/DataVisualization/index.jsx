import { ThePieChart, BarChartComponent, LineChartComponent, DayToSolveBarChart, UsersPieChart } from "../../components/Charts";
import FlyoutNav from "../../components/FlyoutNav";
import { CountUpStats } from "../../components/Stats";
import React from "react";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

//bestie this is the page!!!! 
export default function DataVisuals() {
    return (
        <>
            <FlyoutNav />
            <div className="bg-oxford text-left pt-10 px-8 md:px-16 lg:px-32">
                <Reveal>
                    <h1 className="mt-24 font-bold text-white" style={{ fontSize: '40px', lineHeight: '1.2' }}>
                        Here, every data point tells the story
                        <span> of a resident's struggle and resilience, driving systemic</span>
                        <span> change through collective action and informed advocacy.</span>
                    </h1>
                </Reveal>

                <Reveal>
                    <p className="text-white mt-2 pt-12" style={{ fontSize: '20px' }}>
                        Our DataVisuals section sheds light on NYCHA residents' critical issues through transparent data visualization. This platform enables tenants to share experiences, confirm problem resolutions, and unite for community action. This effort is pivotal in holding NYCHA accountable, enhancing living standards, and fulfilling our mission to improve the lives of countless low-income New Yorkers.
                    </p>
                </Reveal>
            </div>

            <div className="bg-oxford">
                <CountUpStats />
            </div>

            <main className="bg-oxford flex flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
                <div className="w-full pb-9">
                    <GridItem title="#NYCHA buildings">
                        <LineChartComponent />
                    </GridItem>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <GridItem title="Days it takes to solve issues">
                        <DayToSolveBarChart />
                    </GridItem>
                    <GridItem title="Complaints filed by NYCHA Residents">
                        <BarChartComponent />
                    </GridItem>
                    <GridItem title="Complaints by our users">
                        <ThePieChart />
                    </GridItem>
                    <GridItem title="Where our users are from">
                        <UsersPieChart />
                    </GridItem>
                </div>
            </main >

        </>
    );
};



/////

function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-auto min-h-[450px]">
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <div className="flex flex-grow items-center justify-center w-full">
                {children}
            </div>
        </div>
    );
};


//////

export const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    ///
    return (
        <div ref={ref} className="relative w-fit overflow-hidden">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-electric"
            />
        </div>
    );
};
