import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 400;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const CardCarousel = () => {
    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <section className="bg-slate-100" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-2xl font-semibold">
                        Who we are <span className="text-slate-500">and how we empower you.</span>
                    </p>
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex"
                    >
                        {items.map((item) => {
                            return <Card key={item.id} {...item} />;
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    );
};

const Card = ({ url, category, title, description }) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                // marginLeft: MARGIN,
                // position: "center",
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase text-violet-300">
                    {category}
                </span>
                <p className="my-2 text-3xl font-bold">{title}</p>
                <p className="text-lg text-slate-300">{description}</p>
            </div>
        </div>
    );
};

export default CardCarousel;

const items = [
    {
        id: 1,
        url: "../ambulance.jpg",
        category: "Make a report",
        title: "Advocate",
        description:
            "Our reporting system generates a transparent paper trail for its tenants. Submit a report now, alongside your fellow tenants, to track the maintenance issues in your complex and help hold NYCHA accountable."
    },
    {
        id: 2,
        url: "../weAreOne.jpg",
        category: "Connect with other tenants",
        title: "Engage",
        description:
            "Our application empowers the community by allowing tenants to share a platform. By making posts collectively, our users will be able to see how common their problems across all complexes."
    },
    {
        id: 3,
        url: "../protester.jpg",
        category: "View NYCHA Data",
        title: "View NYCHA Data",
        description:
            "Our charts make it possible for users to have additional context to the problems they face. Depending on the type of report being made, you will be able to track the problem from borough to borough.",
    },
    // {
    //     id: 4,
    //     url: "/imgs/computer/chair.png",
    //     category: "Chairs",
    //     title: "Back feels great",
    //     description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    // }
];