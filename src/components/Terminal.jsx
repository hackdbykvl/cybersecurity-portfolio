import { useEffect, useRef, useState } from "react";

export default function CyberTerminal() {

  const [history, setHistory] = useState([
  "Initializing secure environment...",
  "Loading threat intelligence core...",
  "Decrypting consultant profile...",
  "Access granted.",
  "",
  "Type 'help' to view available commands.",
  "",
]);

  const [input, setInput] = useState("");

  const terminalRef = useRef(null);

const commands = {

  help: [
    "Available commands:",
    "whoami",
    "skills",
    "certs",
    "projects",
    "casestudies",
    "services",
    "contact",
    "clear",
  ],

  whoami: [
    "Keval Brahmbhatt",
    "Cybersecurity Consultant",
    "MCA Postgraduate",
    "Certified Ethical Hacker (CEH)",
    "Focused on ISO 27001, IT Auditing & Digital Trust",
  ],

  skills: [
    "ISO 27001",
    "OWASP ZAP",
    "Vulnerability Assessment",
    "Risk Assessment",
    "Threat Intelligence",
    "IT Auditing",
    "Compliance Documentation",
    "Security Compliance",
    "Digital Trust",
  ],

  certs: [
    "Certified Ethical Hacker (CEH)",
    "Master of Computer Applications (MCA)",
    "ISO 27001 Compliance & Audit Focus",
  ],

  projects: [
    "=== PROJECT PORTFOLIO ===",
    "",
    "[1] ISO 27001 Readiness Workflow",
    "Compliance documentation and audit preparation framework",
    "",
    "[2] OWASP ZAP Security Lab",
    "Automated vulnerability assessment environment",
    "",
    "[3] Cybersecurity Consultant Platform",
    "Professional cybersecurity consulting portfolio",
  ],

  casestudies: [
    "=== CYBER INTELLIGENCE REPORTS ===",
    "",
    "[1] Enterprise ISO 27001 Gap Analysis",
    "Category: Compliance Engineering",
    "Outcome: 60% reduction in compliance gaps",
    "",
    "[2] OWASP Top 10 Vulnerability Simulation",
    "Category: Security Testing Lab",
    "Outcome: Critical vulnerabilities identified",
    "",
    "[3] Security Compliance Monitoring System",
    "Category: GRC Operations",
    "Outcome: Real-time compliance visibility",
    "",
    "Detailed reports available in the Case Studies section.",
  ],

  services: [
  "ISO 27001 Readiness Consulting",
  "IT Auditing",
  "Vulnerability Assessments",
  "Risk Assessments",
  "Compliance Documentation",
  "Digital Trust Advisory",
],

  contact: [
    "LinkedIn:",
    "https://linkedin.com/in/YOUR-LINKEDIN",
    "",
    "GitHub:",
    "https://github.com/YOUR-GITHUB",
    "",
    "Email:",
    "yourmail@example.com",
  ],

};

  const runCommand = (cmd) => {

    const command = cmd.trim().toLowerCase();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (commands[command]) {

      setHistory((prev) => [
        ...prev,
        `> ${command}`,
        ...commands[command],
        "",
      ]);

    } else {

      setHistory((prev) => [
        ...prev,
        `> ${command}`,
        "Command not recognized.",
        "Type 'help' for available commands.",
        "",
      ]);

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!input.trim()) return;

    runCommand(input);

    setInput("");

  };

  useEffect(() => {

    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });

  }, [history]);

  return (

    <section className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-green-500/[0.03] blur-3xl rounded-full"></div>

      {/* Main Terminal */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-green-400/10 bg-black/70 backdrop-blur-xl shadow-[0_0_60px_rgba(74,222,128,0.06)]">

        {/* Tactical Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.08)_1px,transparent_1px)] bg-[size:35px_35px]"></div>
        </div>

        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>

        {/* Header */}
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-4 border-b border-green-400/10 bg-black/60">

          {/* Window Controls */}
          <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

          </div>

          {/* Title */}
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-green-400/70 font-mono">

            Secure Terminal

          </p>

        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="
            relative
            h-[380px]
            sm:h-[460px]
            overflow-y-auto
            px-4
            sm:px-6
            py-5
            font-mono
            text-[13px]
            sm:text-sm
            text-green-400/90
            bg-black/90 md:bg-black/70
          "
        >

          {/* History */}
          <div className="space-y-2">

            {history.map((line, index) => (

              <div
                key={index}
                className={`break-words leading-relaxed ${
                  line.startsWith(">")
                    ? "text-green-300"
                    : "text-green-400/75"
                }`}
              >

                {line}

              </div>

            ))}

          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-start gap-3 mt-6"
          >

            <span className="text-green-400 whitespace-nowrap text-xs sm:text-sm">

              root@access/hack3dbykvl:~$

            </span>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck="false"
              className="
                flex-1
                min-w-0
                bg-transparent
                outline-none
                text-green-300
                caret-green-400
                placeholder:text-green-400/25
              "
              placeholder="Type command..."
            />

          </form>

        </div>

      </div>

    </section>

  );

}