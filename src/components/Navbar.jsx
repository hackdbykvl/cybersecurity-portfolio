import { motion } from "framer-motion";
import { useState } from "react";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-green-400/10"></div>

      {/* SCANLINE GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,170,0.08)_1px,transparent_1px)] bg-[size:100%_4px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <div className="min-w-0">
          <h1 className="text-sm md:text-xl font-black tracking-[0.18em] text-white">
            KEVAL <span className="text-green-400">BRAHMBHATT</span>
          </h1>

          <p className="text-[10px] md:text-[11px] tracking-[0.35em] text-green-400/60 uppercase">
            Cybersecurity Ops Node
          </p>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="relative group text-sm uppercase tracking-[0.28em] text-gray-400 hover:text-green-400 transition-all duration-300"
            >

              {/* Brackets */}
              <span className="opacity-0 group-hover:opacity-100 transition">
                [
              </span>

              {link}

              <span className="opacity-0 group-hover:opacity-100 transition">
                ]
              </span>

              {/* SCANLINE UNDER EFFECT */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-100 shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>

              {/* GLITCH DOT */}
              <span className="absolute -right-2 top-0 w-1 h-1 bg-green-400 opacity-0 group-hover:opacity-100 animate-ping"></span>

            </a>
          ))}

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-400 text-xs tracking-[0.3em]"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* MOBILE CONTROL PANEL */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-green-400/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-6"
        >

          <div className="text-green-400/60 text-[10px] tracking-[0.4em] font-mono">
            SYSTEM NAVIGATION PANEL
          </div>

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.3em] text-gray-400 hover:text-green-400 transition"
            >
              &gt; {link}
            </a>
          ))}

          {/* bottom status */}
          <div className="pt-4 border-t border-green-400/10 text-[10px] text-green-400/40 tracking-[0.35em] font-mono">
            SECURE CHANNEL ACTIVE
          </div>

        </motion.div>
      )}
    </header>
  );
}