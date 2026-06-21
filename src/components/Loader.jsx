import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-terracotta/10 blur-[120px] rounded-full" />

          {/* LOADER TEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-paper text-2xl md:text-3xl font-medium tracking-wide"
            >
              <span className="text-terracotta">{`{{`}</span>
              <span className="mx-2">loading_portfolio</span>
              <span className="text-terracotta">{`}}`}</span>
            </motion.p>

            {/* subtle loading line */}
            <motion.div
              className="mt-4 h-[1px] w-40 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />

            {/* small caption */}
            <motion.p
              className="mt-3 text-xs text-paper/40 tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              initializing system
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}