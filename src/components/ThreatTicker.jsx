import { motion } from "framer-motion";

export default function ThreatTicker() {

  const threats = [
    "THREAT DETECTED : Unauthorized API Scan",
    "SOC STATUS : Secure Infrastructure Active",
    "OWASP MONITORING : Running",
    "ZERO TRUST : Enabled",
    "THREAT INTELLIGENCE : Synced",
    "ISO 27001 COMPLIANCE : Verified",
    "SECURE NODE : Operational",
    "FIREWALL STATUS : Active",
  ];

  return (

    <div className="relative overflow-hidden border-y border-green-400/10 bg-black/70 backdrop-blur-xl py-3">

      {/* Glow */}
      <div className="absolute inset-0 bg-green-400/[0.03]"></div>

      {/* Moving Line */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-16"
      >

        {[...threats, ...threats].map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 text-green-400/70 text-xs tracking-[0.3em] font-mono"
          >

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

            {item}

          </div>

        ))}

      </motion.div>

    </div>

  );
}