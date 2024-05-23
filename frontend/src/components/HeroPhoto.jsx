import { motion } from "framer-motion";
import { useState } from "react";


const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                {/* <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    Better every day
                </span> */}
                <h3 className="text-4xl text-electric md:text-6xl font-semibold">
                    We know that safe housing is a human right                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    With NYCHA's troubling record as New York City’s most negligent landlord, our platform not only shines a light on unresolved maintenance issues but also creates a documented paper trail of reports. This transparency mobilizes community action and ensures that every shared experience and report contributes to the collective pursuit of accountability, driving significant improvements in living conditions for all NYCHA residents.
                </p>
                {/* <button className="bg-electric text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Join us
                </button> */}
            </div>
            <ShuffleGrid />
        </section>
    );
};

const ShuffleGrid = () => {
    const [imageSrc, setImageSrc] = useState("../famAtBeach.png");

    return (
        <div className="h-[450px] w-full border-radius: 0.125rem">
            <motion.div
                layout
                transition={{ duration: 1.5, type: "spring" }}
                className="w-full h-full"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></motion.div>
        </div>
    );
};

export default ShuffleHero;
