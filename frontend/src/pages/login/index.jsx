import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../../adapters/auth-adapter";
import CurrentUserContext from "../../contexts/current-user-context";
import { motion } from "framer-motion";
import FlyoutNav from "../../components/FlyoutNav";

const primaryVariants = {
    initial: { y: 25, opacity: 0 },
    animate: { y: 0, opacity: 1 }
};

export default function LoginPage() {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorText('');
        const formData = new FormData(event.target);
        const [user, error] = await logUserIn(Object.fromEntries(formData));
        if (error) return setErrorText(error.message);
        setCurrentUser(user);
        navigate(`/users/${user.id}`);
    };

    if (currentUser) return <Navigate to="/" />;

    return (
        <div className="min-h-screen bg-oxford flex flex-col">
            <FlyoutNav />
            <div className="flex flex-1 items-center justify-center px-4 py-20">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    transition={{ staggerChildren: 0.05 }}
                    viewport={{ once: true }}
                    className="w-full max-w-md bg-shade rounded-2xl border border-gray-700 p-8"
                >
                    <motion.h1
                        variants={primaryVariants}
                        className="mb-2 text-center text-4xl font-semibold text-white"
                    >
                        Login
                    </motion.h1>
                    <motion.p variants={primaryVariants} className="mb-8 text-center text-slate-400">
                        Welcome back! Please enter your details.
                    </motion.p>

                    <form onSubmit={handleSubmit} className="w-full" aria-labelledby="login-heading">
                        <motion.div variants={primaryVariants} className="mb-4 w-full">
                            <label htmlFor="username" className="mb-1 inline-block text-sm font-medium text-slate-300">
                                Username<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                autoComplete="username"
                                id="username"
                                name="username"
                                className="w-full rounded border border-gray-600 bg-oxford text-white px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-electric placeholder-slate-500"
                                required
                            />
                        </motion.div>

                        <motion.div variants={primaryVariants} className="mb-6 w-full">
                            <label htmlFor="password" className="mb-1 inline-block text-sm font-medium text-slate-300">
                                Password<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                id="password"
                                name="password"
                                className="w-full rounded border border-gray-600 bg-oxford text-white px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-electric placeholder-slate-500"
                                required
                            />
                        </motion.div>

                        <motion.button
                            variants={primaryVariants}
                            whileTap={{ scale: 0.985 }}
                            type="submit"
                            className="mb-1.5 w-full rounded bg-electric px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
                        >
                            Log In
                        </motion.button>
                    </form>
                    {!!errorText && <motion.p variants={primaryVariants} className="mt-3 text-red-400 text-center">{errorText}</motion.p>}
                </motion.div>
            </div>
        </div>
    );
}
