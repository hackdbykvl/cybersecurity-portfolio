import { motion } from "framer-motion";

export default function CyberDashboard() {

  const stats = [
    {
      title: "Threat Detection",
      value: "99.2%",
    },
    {
      title: "Security Score",
      value: "A+",
    },
    {
      title: "Incidents Blocked",
      value: "1,284",
    },
    {
      title: "Active Monitoring",
      value: "24/7",
    },
  ];

  const logs = [
    "Initializing encrypted tunnel...",
    "Firewall integrity verified",
    "Threat intelligence synced",
    "Zero-trust architecture enabled",
    "Monitoring attack surfaces...",
    "System secure",
  ];

  return (

    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="relative w-full max-w-[700px] mx-auto"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>

      {/* Main Panel */}
      <div className="relative overflow-hidden rounded-[28px] border border-green-400/10 bg-black/50 backdrop-blur-3xl shadow-[0_0_60px_rgba(74,222,128,0.08)]">

        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-white/5">

          <div>

            <h3 className="text-green-400 font-bold text-lg sm:text-xl tracking-wide">

              Threat Intelligence Core

            </h3>

            <p className="text-gray-500 text-xs sm:text-sm">

              Real-Time Security Monitoring

            </p>

          </div>

          {/* Window Dots */}
          <div className="flex gap-2 shrink-0">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

          </div>

        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">

          {/* Security Meter */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 sm:p-5">

            <div className="flex items-center justify-between mb-3">

              <span className="text-gray-400 text-xs sm:text-sm">

                Infrastructure Security

              </span>

              <span className="text-green-400 text-xs sm:text-sm font-bold">

                98%

              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{
                  duration: 1,
                }}
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
              />

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {stats.map((item) => (

              <motion.div
                key={item.title}

                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(74,222,128,0.3)",
                }}

                className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300"
              >

                <p className="text-gray-400 text-[11px] sm:text-sm mb-2 leading-relaxed">

                  {item.title}

                </p>

                <h4 className="text-2xl sm:text-3xl font-black text-green-400 break-words">

                  {item.value}

                </h4>

              </motion.div>

            ))}

          </div>

          {/* Live Logs */}
          <div className="rounded-2xl border border-green-400/10 bg-black/60 p-4 sm:p-5">

            <div className="flex items-center justify-between mb-4 gap-3">

              <h4 className="text-green-400 font-bold text-sm sm:text-base">

                LIVE SECURITY LOGS

              </h4>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400 shrink-0">

                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                LIVE

              </div>

            </div>

            <div className="space-y-2 font-mono text-[11px] sm:text-sm text-green-400/80 break-words">

              {logs.map((log, index) => (

                <motion.p
                  key={index}

                  initial={{
                    opacity: 0,
                    x: -10,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * 0.2,
                  }}
                >

                  &gt; {log}

                </motion.p>

              ))}

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}