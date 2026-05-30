import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function CyberDashboard() {
  const stats = [
    { title: "Threat Detection", value: 99.2, suffix: "%" },
    { title: "Security Score", value: "A+", suffix: "" },
    { title: "Incidents Blocked", value: 1284, suffix: "" },
    { title: "Active Monitoring", value: "24/7", suffix: "" },
  ];

  const logs = [
    "Initializing encrypted tunnel...",
    "Firewall integrity verified",
    "Threat intelligence synced",
    "Zero-trust architecture enabled",
    "Monitoring attack surfaces...",
    "System secure",
  ];

  const [typedLogs, setTypedLogs] = useState([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const [progress, setProgress] = useState(0);

  const [animatedStats, setAnimatedStats] = useState({
    threat: 0,
    score: "A+",
    incidents: 0,
    monitor: "24/7",
  });

  /* =====================
     TYPEWRITER LOG EFFECT (NEW)
  ===================== */
  useEffect(() => {
    if (currentLogIndex >= logs.length) return;

    const currentLog = logs[currentLogIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= currentLog.length) {
        setCurrentText(currentLog.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);

        // push completed log
        setTypedLogs((prev) => [...prev, currentLog]);

        // move to next log after small pause
        setTimeout(() => {
          setCurrentText("");
          setCurrentLogIndex((prev) => prev + 1);
        }, 600);
      }
    }, 35); // typing speed

    return () => clearInterval(interval);
  }, [currentLogIndex]);

  /* =====================
     PROGRESS ANIMATION
  ===================== */
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      if (p <= 99) setProgress(p);
      else clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  /* =====================
     STATS ANIMATION
  ===================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) => {
        const nextThreat = Math.min(Number(prev.threat) + 1.2, 99.2);
        const nextIncidents = Math.min(Number(prev.incidents) + 17, 1284);

        return {
          threat: nextThreat,
          score: "A+",
          incidents: Math.floor(nextIncidents),
          monitor: "24/7",
        };
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="relative w-full max-w-[700px] mx-auto"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full" />

      {/* Panel */}
      <div className="relative overflow-hidden rounded-[28px] border border-green-400/10 bg-black/50 backdrop-blur-3xl">

        {/* Top Bar */}
        <div className="flex justify-between px-6 py-4 border-b border-white/5">
          <div>
            <h3 className="text-green-400 font-bold text-lg">
              Threat Intelligence Core
            </h3>
            <p className="text-gray-500 text-xs">
              Real-Time Security Monitoring
            </p>
          </div>

          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="p-6 space-y-6">

          {/* SECURITY METER */}
          <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
            <div className="flex justify-between mb-2 text-sm text-gray-400">
              <span>Infrastructure Security</span>
              <span className="text-green-400 font-bold">{progress}%</span>
            </div>

            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-gray-400 text-sm">Threat Detection</p>
              <h4 className="text-2xl font-black text-green-400">
                {animatedStats.threat.toFixed(1)}%
              </h4>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-gray-400 text-sm">Security Score</p>
              <h4 className="text-2xl font-black text-green-400">A+</h4>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-gray-400 text-sm">Incidents Blocked</p>
              <h4 className="text-2xl font-black text-green-400">
                {animatedStats.incidents}
              </h4>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-gray-400 text-sm">Active Monitoring</p>
              <h4 className="text-2xl font-black text-green-400">24/7</h4>
            </div>
          </div>

          {/* LIVE LOGS (TYPEWRITER ONLY HERE) */}
          <div className="p-4 rounded-2xl border border-green-400/10 bg-black/60">
            <div className="flex justify-between mb-3">
              <h4 className="text-green-400 font-bold text-sm">
                LIVE SECURITY LOGS
              </h4>
              <span className="text-green-400 text-xs animate-pulse">
                ● LIVE
              </span>
            </div>

            <div className="font-mono text-sm text-green-400/80 space-y-1">

              {/* completed logs */}
              {typedLogs.map((log, i) => (
                <p key={i}>&gt; {log}</p>
              ))}

              {/* current typing line */}
              {currentLogIndex < logs.length && (
                <p className="text-green-300">
                  &gt; {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              )}

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}