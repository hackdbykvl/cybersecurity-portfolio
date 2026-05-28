import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2800); // ⬅️ reduced from 3200ms to 30000ms

  return () => clearTimeout(timer);
}, []);
  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          className="fixed inset-0 z-[99999] overflow-hidden bg-black flex items-center justify-center px-6"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
        >

          {/* Atmospheric Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.07),transparent_65%)]"></div>

          {/* Tactical Grid */}
          <div className="absolute inset-0 opacity-[0.035]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.08)_1px,transparent_1px)] bg-[size:38px_38px]"></div>
          </div>

          {/* Scan Line */}
          <motion.div
            animate={{
              y: ["-100%", "120%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-green-400/[0.05] to-transparent blur-2xl"
          />

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-xl text-center">

            {/* Brand */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
                letterSpacing: "0.4em",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "0.22em",
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                text-green-400
                mb-10
                drop-shadow-[0_0_25px_rgba(74,222,128,0.35)]
              "
            >

              HACKEDBYKVL

            </motion.h1>

            {/* Logs */}
            <div className="space-y-3 text-left max-w-md mx-auto">

              {[
                "Initializing secure environment...",
                "Loading threat intelligence...",
                "Establishing encrypted systems...",
                "Access granted.",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.35,
                    duration: 0.45,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    text-green-400/75
                    font-mono
                    text-xs
                    sm:text-sm
                    tracking-wide
                  "
                >

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                  <span>
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* Progress */}
            <div className="relative mt-10 w-full max-w-[280px] h-[2px] bg-white/5 overflow-hidden mx-auto rounded-full">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.7)]"
              />

            </div>

            {/* Footer Status */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.6,
              }}
              className="
                mt-7
                text-[9px]
                sm:text-[10px]
                tracking-[0.4em]
                text-green-400/35
                font-mono
              "
            >

              SECURE • ENCRYPTED • MONITORED

            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}