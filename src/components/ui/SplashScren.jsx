import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onFinish();
        }, 3500); // ⏱️ 3.5 soniya
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
                >
                    {/* "suv/bo'yoq sachrashi" effekti */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.6, 1], opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* bo'yoq effekti */}
                        <motion.div
                            className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-3xl"
                            initial={{ scale: 0 }}
                            animate={{
                                scale: [0, 2, 1.8],
                                opacity: [1, 0.9, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        />

                        {/* Matn */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                            className="text-white text-5xl sm:text-7xl font-extrabold drop-shadow-[0_5px_25px_rgba(0,112,244,0.9)] text-center"
                        >
                            iPro <span className="text-purple-400">Group</span>
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
