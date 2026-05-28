import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden pointer-events-none">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)]"></div>

      {/* GRID LAYER */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* MAIN SIGNAL LINE */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      {/* ENERGY PULSE SCAN */}
      <motion.div
        animate={{
          x: ["-30%", "130%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -translate-y-1/2 w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-green-400/80 to-transparent blur-sm"
      />

      {/* SECONDARY MICRO SCAN (FASTER FLICKER) */}
      <motion.div
        animate={{
          x: ["-40%", "140%"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[52%] w-20 h-[1px] bg-green-400/40 blur-[1px]"
      />

      {/* LEFT LABEL (hidden on small screens) */}
      <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.4em] text-green-400/40">
        SYSTEM SYNC
      </div>

      {/* RIGHT LABEL */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.4em] text-green-400/40">
        SECURE TRANSITION
      </div>

      {/* MICRO STATIC NOISE LINE */}
      <div className="absolute top-1/2 left-0 w-full h-px opacity-[0.08] bg-white" />

    </div>
  );
}