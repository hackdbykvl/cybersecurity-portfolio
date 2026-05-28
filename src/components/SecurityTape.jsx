import { motion } from "framer-motion";

export default function SecurityTape() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 md:z-[5]">

      {/* Tape 1 */}
      <motion.div
        animate={{
          x: [100, -100, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[9%] left-0 md:-left-40 rotate-[-8deg] md:rotate-[-12deg] mix-blend-screen w-[200%] md:w-auto"
      >

        <div className="flex whitespace-nowrap bg-yellow-300/40 text-black/70 font-black tracking-[0.45em] text-[11px] py-3 px-6 blur-[0.2px] shadow-[0_0_40px_rgba(250,204,21,0.18)] backdrop-blur-sm opacity-70">

          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4">
              DO NOT CROSS • SECURE ZONE • AUTHORIZED ACCESS ONLY
            </span>
          ))}

        </div>

      </motion.div>

      {/* Tape 2 */}
      <motion.div
        animate={{
          x: [100, -100, 100],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[8%] -right-40 rotate-[10deg] mix-blend-screen"
      >

        <div className="flex whitespace-nowrap bg-yellow-300/40 text-black/60 font-black tracking-[0.45em] text-[11px] py-3 px-6 blur-[0.2px] shadow-[0_0_40px_rgba(250,204,21,0.18)] backdrop-blur-sm opacity-70">

          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4">
              THREAT DETECTED • RESTRICTED NETWORK • SECURITY MONITORING ACTIVE
            </span>
          ))}

        </div>

      </motion.div>

    </div>
  );
}