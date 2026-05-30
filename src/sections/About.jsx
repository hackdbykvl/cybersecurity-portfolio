import { motion } from "framer-motion";
import Reveal from "../components/Reveal";


export default function About() {
  return (
    <Reveal>

      <section
        id="about"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.06),transparent_60%)]"></div>

        <div className="relative grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-5">
              About
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">

              Building
              <span className="block text-green-400">
                Secure Digital
              </span>

              Infrastructure

            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Cybersecurity-focused MCA postgraduate and Certified Ethical Hacker
              with strong interest in security operations, compliance systems,
              vulnerability assessment, IT auditing, and digital trust.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Combining technical intelligence, strategic thinking, and futuristic
              interface design to create secure and trustworthy digital ecosystems.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {[
                ["CEH", "Certified"],
                ["MCA", "Postgraduate"],
                ["SOC", "Focused"],
              ].map(([title, sub]) => (

                <motion.div
                  key={title}
                  whileHover={{
                    y: -8,
              borderColor: "rgba(74,222,128,0.3)",  
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 transition-all duration-300 text-left"
                >

                  <p className="text-3xl font-black text-green-400">
                    {title}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {sub}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="relative"
>

  {/* Outer Glow (soft breathing like Hero) */}
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.35, 0.5, 0.35],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 bg-green-500/10 blur-[120px] rounded-full"
  />

  {/* Main Card */}
  <motion.div
    whileHover={{
      y: -6,
      boxShadow: "0 0 60px rgba(74,222,128,0.15)",
    }}
    transition={{ type: "spring", stiffness: 120, damping: 15 }}
    className="
      relative rounded-[32px]
      border border-green-400/10
      bg-black/40 backdrop-blur-3xl
      overflow-hidden
      shadow-[0_0_60px_rgba(74,222,128,0.08)]
    "
  >

    {/* Top */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">

      <div>
        <h3 className="text-green-400 font-bold text-xl">
          Security Profile
        </h3>
        <p className="text-gray-500 text-sm">
          Operational Intelligence
        </p>
      </div>

      {/* STATUS DOTS (add subtle pulse like Hero badge) */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse [animation-delay:150ms]" />
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:300ms]" />
      </div>

    </div>

    {/* Content */}
    <div className="p-6 space-y-6">

      {/* Identity (soft hover lift like Hero cards) */}
      <motion.div
        whileHover={{
          y: -3,
          boxShadow: "0 0 25px rgba(74,222,128,0.08)",
        }}
        className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300"
      >
        <p className="text-gray-500 text-sm mb-2">
          Identity
        </p>

        <h4 className="text-2xl font-black text-white">
          Keval Brahmbhatt
        </h4>

        <p className="text-green-400 text-sm mt-2">
          Cybersecurity Consultant
        </p>
      </motion.div>

      {/* Expertise (Hero-style micro cards) */}
      <div className="grid grid-cols-2 gap-4">
        {[
          "ISO 27001",
          "OWASP ZAP",
          "IT Auditing",
          "Risk Assessment",
        ].map((item) => (
          <motion.div
            key={item}
            whileHover={{
              y: -3,
              boxShadow: "0 0 20px rgba(74,222,128,0.08)",
              borderColor: "rgba(74,222,128,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              rounded-2xl
              border border-white/5
              bg-white/[0.03]
              p-4
              text-gray-300 text-sm
              cursor-default
            "
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Live Status (add subtle “terminal breathing” effect) */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="
          rounded-2xl
          border border-green-400/10
          bg-black/60
          p-5
          font-mono text-sm
          text-green-400/80
          space-y-2
        "
      >
        <p>&gt; Secure infrastructure monitoring active</p>
        <p>&gt; Threat intelligence synchronized</p>
        <p>&gt; Compliance operations initialized</p>
        <p>&gt; Zero-trust principles enabled</p>
      </motion.div>

    </div>
  </motion.div>

</motion.div>

        </div>

      </section>

    </Reveal>
  );
}