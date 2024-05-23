import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";

const WaterDropHero = () => {
    return (
        <section className="text-slat-100 overflow-hidden bg-oxford px-8 py-24 md:px-12 md:py-32">
            <div className="relative mx-auto max-w-5xl">
                <div className="pointer-events-none relative z-10">
                    <Reveal>
                        <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
                            Advocate for your Community<span className="text-indigo-500"></span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className="pointer-events-auto my-2 text-2xl text-electric md:my-4 md:text-4xl">
                            {/* And yourself{" "} */}
                            <span className="font-semibold text-indigo-500">
                                And yourself.
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="pointer-events-auto max-w-xl text-xl md:text-lg text-slate-300">
                            TenantVoice is a platform where NYCHA residents can openly share their housing-related issues. Our mission is to foster a supportive community where tenants can connect, ensuring no one feels isolated with their challenges. By bringing these issues to light, we enable residents to unite and advocate for better living conditions together.                        </p>

                    </Reveal>
                    <Reveal>
                        <Link to={`/sign-up`}>
                            {/* // changed color and text to oxford, to have some padding  */}
                            <button className="pointer-events-auto mt-4 rounded bg-electric px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6">
                                Join Us Today
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

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

export default WaterDropHero;
