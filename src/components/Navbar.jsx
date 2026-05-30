import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "about", href: "about" },
  { label: "skills", href: "skills" },
  { label: "projects", href: "projects" },
  { label: "case studies", href: "casestudies" },
  { label: "services", href: "services" },
  { label: "contact", href: "contact" },

  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-green-400/10"></div>

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,170,0.08)_1px,transparent_1px)] bg-[size:100%_4px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        <div className="min-w-0">
          <h1 className="text-sm md:text-xl font-black tracking-[0.18em] text-white">
            KEVAL <span className="text-green-400">BRAHMBHATT</span>
          </h1>

          <p className="text-[10px] md:text-[11px] tracking-[0.35em] text-green-400/60 uppercase">
            Cybersecurity Ops Node
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="relative group text-sm uppercase tracking-[0.28em] text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              <span className="opacity-0 group-hover:opacity-100 transition">
                [
              </span>

              {link.label}

              <span className="opacity-0 group-hover:opacity-100 transition">
                ]
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-100 shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>

              <span className="absolute -right-2 top-0 w-1 h-1 bg-green-400 opacity-0 group-hover:opacity-100 animate-ping"></span>
            </a>
          ))}

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-400 text-xs tracking-[0.3em]"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
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
              key={link.href}
              href={`#${link.href}`}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.3em] text-gray-400 hover:text-green-400 transition"
            >
              &gt; {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-green-400/10 text-[10px] text-green-400/40 tracking-[0.35em] font-mono">
            SECURE CHANNEL ACTIVE
          </div>

        </motion.div>
      )}
    </header>
  );
}