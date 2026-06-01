export default function Footer() {
  return (
    <footer className="relative z-20 mt-20 border-t border-green-400/10 bg-black/90 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,170,0.06),transparent_65%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-14">

        {/* TOP */}
        <div className="flex flex-col xl:flex-row gap-10 xl:items-center xl:justify-between">

          {/* Identity */}
          <div className="max-w-2xl min-w-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-[0.15em] text-white mb-4 break-words">
              HACKEDBY
              <span className="text-green-400">KVL</span>
            </h3>

            <p className="text-gray-500 leading-relaxed text-sm sm:text-base break-words">
              Cybersecurity consultant focused on secure infrastructure,
              vulnerability assessment, IT auditing, compliance readiness,
              and digital trust systems.
            </p>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full xl:w-auto">
            {[
              "ZERO TRUST",
              "THREAT INTEL",
              "SOC READY",
              "ENCRYPTED",
            ].map((item) => (
              <div
                key={item}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-400/10 bg-green-400/[0.03] text-green-400/60 text-[9px] sm:text-[10px] tracking-[0.25em] font-mono whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 md:my-10 h-px w-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent" />

        {/* BOTTOM */}
        <div className="
          flex flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          text-center
          md:text-left
        ">

          {/* Status */}
          <div className="
            flex items-center justify-center md:justify-start
            gap-3
            text-[10px] sm:text-[11px]
            text-green-400/50
            tracking-[0.3em]
            font-mono
            w-full md:w-auto
          ">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            SECURE NETWORK ACTIVE
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs sm:text-sm text-center w-full md:w-auto">
            © 2026 Keval Brahmbhatt • Cybersecurity Consultant
          </p>

          {/* Navigation */}
          <div className="
            flex flex-wrap
            justify-center md:justify-end
            gap-4 sm:gap-6
            text-xs sm:text-sm text-gray-500
            w-full md:w-auto
          ">
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#skills" className="hover:text-green-400 transition">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#casestudies" className="hover:text-green-400 transition">Case Studies</a>                       
            <a href="#services" className="hover:text-green-400 transition">Services</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
}