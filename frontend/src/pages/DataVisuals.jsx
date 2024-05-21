import { ThePieChart, BarChartComponent } from "../components/Charts";
import FlyoutNav from "../components/FlyoutNav";
import { CountUpStats } from "../components/Stats";
import React, { useEffect, useRef } from "react";

//bestie this is the page!!!! 
export default function DataVisuals() {
    return (
        <>
            <FlyoutNav />

            <div className="bg-oxford text-left pt-10 px-8 md:px-16 lg:px-32">
                <h1 className="mt-24 font-bold text-electric" style={{ fontSize: '40px', lineHeight: '1.2' }}>
                    Here, every data point tells the story of a resident's struggle and resilience, driving systemic change through collective action and informed advocacy.
                </h1>
                <p className="text-white mt-2" style={{ fontSize: '20px' }}>
                    Our DataVisuals section sheds light on NYCHA residents' critical issues through transparent data visualization. This platform enables tenants to share experiences, confirm problem resolutions, and unite for community action. This effort is pivotal in holding NYCHA accountable, enhancing living standards, and fulfilling our mission to improve the lives of countless low-income New Yorkers.                </p>
            </div>


            <div className="bg-oxford">
                <CountUpStats />
            </div>


            <main className=" bg-oxford flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">

                    <GridItem title="Bar Chart">
                        <BarChartComponent />
                    </GridItem>

                    <GridItem title="Pie Chart">
                        <ThePieChart />
                    </GridItem>
                </div>
            </main>
        </>
    );

};



function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            {children}
        </div>
    );
}