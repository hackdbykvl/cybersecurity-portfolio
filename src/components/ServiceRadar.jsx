import { motion } from "framer-motion";

const nodes = [
  { label: "ISO 27001", x: "20%", y: "25%" },
  { label: "IT Audit", x: "75%", y: "20%" },
  { label: "Risk", x: "50%", y: "50%" },
  { label: "Compliance", x: "25%", y: "75%" },
  { label: "OWASP", x: "75%", y: "75%" },
  { label: "Trust", x: "50%", y: "15%" },
];

export default function ServiceRadar() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Radar circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="w-[500px] h-[500px] rounded-full border border-green-400/5" />
        <div className="absolute inset-[60px] rounded-full border border-green-400/5" />
        <div className="absolute inset-[120px] rounded-full border border-green-400/5" />

        {/* Radar Sweep */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            w-[250px]
            h-[2px]
            origin-left
            bg-gradient-to-r
            from-green-400/40
            via-green-400/10
            to-transparent
          "
        />
      </div>

      {/* Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="rgba(74,222,128,0.08)" />
        <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="rgba(74,222,128,0.08)" />
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="rgba(74,222,128,0.08)" />
        <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="rgba(74,222,128,0.08)" />
        <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="rgba(74,222,128,0.08)" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.label}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            left: node.x,
            top: node.y,
          }}
          className="absolute"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

          <div className="absolute top-3 left-0 text-[9px] tracking-[0.2em] text-green-400/40 whitespace-nowrap">
            {node.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}