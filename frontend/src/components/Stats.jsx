import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
            <h2 className="mb-8 text-center text-base text-slate-100 sm:text-lg md:mb-16">
                As of
                <span className="text-slate-100"> 2023 </span>
            </h2>

            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat
                    // cryingg, i need to fix the num vv
                    // last two stats from here : https://rpa.org/work/reports/nycha-resident-needs-assessment
                    // first stat from NYCHA 2023 fact sheet
                    num={528}
                    suffix="K+"
                    subheading=" New Yorkers call NYCHA home"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={25}
                    // decimals={1}
                    suffix="%"
                    subheading="Of residents say their living conditions directly affects their physical health"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <Stat
                    num={81}
                    suffix="%"
                    subheading="Of tenants need immediate repairs"
                />
            </div>
        </div>
    );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl text-poppy">
                <span ref={ref}></span>
                {suffix}
            </p>
            <p className="max-w-48 text-center text-slate-100">{subheading}</p>
        </div>
    );
};