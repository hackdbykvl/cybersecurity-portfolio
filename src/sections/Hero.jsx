import { motion } from "framer-motion";
import CyberDashboard from "../components/CyberDashboard";
import Terminal from "../components/Terminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow (balanced cyber green + cyan mix) */}
      <div className="absolute top-[-20%] left-[-10%] w-[420px] md:w-[700px] h-[420px] md:h-[700px] bg-green-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[420px] md:w-[700px] h-[420px] md:h-[700px] bg-green-500/10 rounded-full blur-[140px]" />

      {/* Soft grid overlay feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.2),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div>

            {/* Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-flex items-center gap-3 border border-green-400/20 bg-green-400/10 rounded-full px-4 md:px-5 py-2 text-green-300 text-xs md:text-sm mb-6 md:mb-8 backdrop-blur-xl"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Threat Intelligence Active
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-8xl font-black leading-tight mb-6 md:mb-8"
            >
              CYBER
              <span className="block text-green-400">SECURITY</span>
              <span className="block text-white/80">CONSULTANT</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8 md:mb-12"
            >
              Cybersecurity consultant focused on digital trust,
              IT auditing, compliance systems, vulnerability assessment,
              and secure infrastructure.
            </motion.p>

            {/* Button */}
            <motion.div className="flex flex-wrap gap-4 mb-10 md:mb-16">

              <a
                href="/resume.pdf"
                download
                className="
                  px-6 md:px-8 py-3 md:py-4
                  rounded-2xl
                  bg-green-400
                  text-black
                  font-bold
                  hover:scale-105
                  transition
                  shadow-[0_0_35px_rgba(74,222,128,0.25)]
                "
              >
                Download Resume
              </a>

            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {[
                ["CEH", "Ethical Hacker"],
                ["ISO", "Compliance"],
                ["MCA", "Postgraduate"],
              ].map(([title, sub]) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-4 md:p-5"
                >
                  <p className="text-2xl md:text-4xl font-black text-green-400">
                    {title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">
                    {sub}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-green-400/10 scale-110"
            />

            <CyberDashboard />

          </motion.div>

        </div>



      </div>
    </section>
  );
}