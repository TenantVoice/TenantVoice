import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";



export const ColorChangeCards = () => {
    return (
        <div className="p-4 md:p-8 bg-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
                <Cards
                    heading="Plan"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc={`url(${imgSrc})`}
                />
                <Cards
                    heading="Play"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                />
                <Cards
                    heading="Connect"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                />
                <Cards
                    heading="Support"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc=""
                />
            </div>
        </div>
    );
};

export const Cards = ({ heading, description, imgSrc }) => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.035,
            }}
            whileHover="hover"
            className="w-full h-96 bg-slate-500 overflow-hidden cursor-pointer group relative my-4"
        >
            <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
                <div>
                    <h4>
                        {heading.split("").map((l, i) => (
                            <ShiftLetter letter={l} key={i} />
                        ))}
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ShiftLetter = ({ letter }) => {
    return (
        <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
            <motion.span
                className="flex flex-col min-w-[4px]"
                style={{
                    y: "0%",
                }}
                variants={{
                    hover: {
                        y: "-50%",
                    },
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );
};

export default ColorChangeCards;