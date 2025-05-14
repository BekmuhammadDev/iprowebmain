// components/TestModeBanner.tsx
import { motion } from "framer-motion";

export default function TestModeBanner() {
  return (
    <div className="fixed top-1 w-full overflow-hidden pointer-events-none z-50">
      <motion.div
        className="mx-auto w-max bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow-lg pointer-events-auto"
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "-100%", "100%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Saytimiz test rejimida
      </motion.div>
    </div>
  );
}
