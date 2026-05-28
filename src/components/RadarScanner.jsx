import { motion } from "framer-motion";

export default function RadarScanner() {
  return (

    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

      {/* Position */}
      <div className="absolute right-[-220px] md:right-[-160px] top-1/2 -translate-y-1/2">

        {/* Radar */}
        <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full">

          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-green-400/[0.04] blur-[90px]"></div>

          {/* Rings */}
          {[1, 2, 3, 4].map((ring) => (

            <div
              key={ring}
              className="absolute inset-0 rounded-full border border-green-400/10"
              style={{
                transform: `scale(${ring * 0.25})`,
              }}
            />

          ))}

          {/* Crosshair */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-green-400/10 -translate-x-1/2"></div>

          <div className="absolute top-1/2 left-0 w-full h-px bg-green-400/10 -translate-y-1/2"></div>

          {/* Rotating Sweep */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(74,222,128,0), rgba(74,222,128,0.14), rgba(74,222,128,0))",
            }}
          />

          {/* Secondary Glow Sweep */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[12%] rounded-full opacity-40"
            style={{
              background:
                "conic-gradient(from 180deg, transparent, rgba(74,222,128,0.06), transparent)",
            }}
          />

          {/* Center Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.9)]">

              <div className="absolute w-8 h-8 rounded-full border border-green-400/20 animate-ping"></div>

            </div>

          </div>

          {/* Signal Blips */}
          {[
            { top: "28%", left: "66%" },
            { top: "62%", left: "34%" },
            { top: "74%", left: "56%" },
            { top: "42%", left: "78%" },
          ].map((dot, index) => (

            <motion.div
              key={index}
              animate={{
                opacity: [0.15, 1, 0.15],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2.5 + index,
                repeat: Infinity,
              }}
              className="absolute w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]"
              style={{
                top: dot.top,
                left: dot.left,
              }}
            />

          ))}

        </div>

      </div>

    </div>

  );
}