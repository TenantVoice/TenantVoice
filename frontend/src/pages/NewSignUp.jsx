import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import FlyoutNav from "../components/FlyoutNav";



export default function SlideInAuth() {
    return (
        <>
            <FlyoutNav />
            <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
                {/* <Logo /> */}
                <Form />
                <SupplementalContent />
            </section>
        </>
    );
};

const Form = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // trying dropdown menu ; SN: on hold until location in model 
    const [location, setLocation] = useState('hi');
    const [options, setOptions] = useState([])
    // ^^ ([]) because dropdown expected to handle options, best represented in an array 
    const [showDropdown, setShowDropdown] = useState(false);

    if (currentUser) return <Navigate to="/" />;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorText('');
        if (!username || !email || !password || !fullName || !location) return setErrorText(error.message);

        const [user, error] = await createUser({ username, email, password, fullName, location });
        if (error) return setErrorText(error.message);


        setCurrentUser(user);
        navigate('/');
    };
    // this is just testing for the dropdown, IGNOREEE 
    const boroughs = ['Bronx', 'Brooklyn', 'Queens', 'Manhattan', 'Staten Island']
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
        if (name === 'fullName') setFullName(value);
        if (name === 'email') setEmail(value);
        if (name === 'location') {
            setLocation(value);
            const filteredOptions = value.length > 0 ? boroughs.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            ) : [];
            setOptions(filteredOptions);
            setShowDropdown(filteredOptions.length > 0);
        };
    };

    const handleLocationChange = (value) => {
        setLocation(value);
        setShowDropdown(false);
    };


    return (

        <motion.div
            initial="initial"
            whileInView="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            viewport={{ once: true }}
            className="flex items-center justify-center pb-4 pt-20 md:py-20"
        >
            <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
                <motion.h1
                    variants={primaryVariants}
                    className="mb-2 text-center text-4xl font-semibold"
                >
                    Create your account
                </motion.h1>
                <motion.p variants={primaryVariants} className="mb-8 text-center">
                    something meaningful here ¿
                </motion.p>

                <form onSubmit={handleSubmit} className="w-full">
                    {errorText && <p className="text-red-500">{errorText}</p>}
                    {fullName}
                    <motion.div variants={primaryVariants} className="mb-2 w-full">
                        <label htmlFor="fullName" className="mb-1 inline-block text-sm font-medium">
                            Full Name<span className="text-red-600">*</span>
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Your name will only be visible to you"
                            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                            onChange={handleChange}
                            value={fullName}
                            required
                        />
                        <label htmlFor="username">Username</label>

                        <input
                            autoComplete="off"
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={username}
                        />

                        <label htmlFor="email">email</label>
                        <input type="text" id="email" name="email" onChange={handleChange} value={email} />

                        <label htmlFor="password">Password</label>
                        <input
                            autoComplete="off"
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                        />

                    </motion.div>
                    {/* // locationnn */}

                    <motion.div variants={primaryVariants} className="mb-2 w-full">
                        <label htmlFor="location" className="mb-1 inline-block text-sm font-medium">
                            Location<span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Start typing location..."
                            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                            // value={location}
                            onChange={handleLocationChange}
                            autoComplete="off"
                            required
                        />
                        {showDropdown && (
                            <ul className="absolute w-full bg-white border border-slate-300 z-10">
                                {boroughs.map((option, index) => (
                                    <li
                                        key={index}
                                        className="px-2.5 py-1.5 hover:bg-slate-100 cursor-pointer"
                                        onClick={() => handleSelectOption(option)}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>



                    <motion.button
                        variants={primaryVariants}
                        whileTap={{ scale: 0.985 }}
                        type="submit"
                        className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
                    >
                        Sign Up Now!
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};


const SupplementalContent = () => {
    return (
        <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
            <img
                alt="poster of we are"
                src="../weAreOne.jpg"
                className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
            />

            <div className="absolute right-2 top-4 z-10">
                <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
            </div>

            <motion.div
                initial="initial"
                whileInView="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                viewport={{ once: true }}
                className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
            >
                <motion.h2
                    className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
                    variants={primaryVariants}
                >
                    Allowing Tenants
                    <br />
                    to have Voices
                </motion.h2>
                <motion.p
                    variants={primaryVariants}
                    className="mb-6 max-w-md text-sm text-slate-300"
                >
                    Connect with your NYCHA neighbors in one place, to empower the community and voice out housing issues.
                </motion.p>
                <div className="flex items-center gap-4">

                </div>
            </motion.div>
        </div>
    );
};

const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
        <svg
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[50%] top-4 -translate-x-[50%] fill-slate-950 md:left-4 md:-translate-x-0"
        >
            <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                stopColor="#000000"
            ></path>
            <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                stopColor="#000000"
            ></path>
        </svg>
    );
};

const primaryVariants = {
    initial: {
        y: 25,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
};

const avatarVariants = {
    initial: {
        x: 10,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
};


// SCREAMMMM