import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
const caseStudies = [
  {
    title: "Enterprise ISO 27001 Gap Analysis",
    category: "Compliance Engineering",
    problem:
      "Organization lacked structured ISMS documentation, risk register, and audit readiness for ISO 27001 certification.",
    solution:
      "Built full compliance framework including asset inventory, risk assessment matrix, control mapping, and policy structure aligned with Annex A controls.",
    outcome:
      "Achieved audit-ready ISMS structure with 60% reduction in compliance gaps and improved governance visibility.",
  },
  {
    title: "OWASP Top 10 Vulnerability Simulation",
    category: "Security Testing Lab",
    problem:
      "Need to simulate real-world vulnerabilities for training and system validation.",
    solution:
      "Configured OWASP ZAP environment for automated scanning, manual penetration testing, and attack surface mapping.",
    outcome:
      "Identified critical vulnerabilities (XSS, SQLi, misconfigurations) and produced structured remediation reports.",
  },
  {
    title: "Security Compliance Monitoring System",
    category: "GRC Operations",
    problem:
      "No centralized visibility into security controls, audit logs, and compliance tracking.",
    solution:
      "Designed dashboard-based system for tracking controls, policies, audit evidence, and risk status updates.",
    outcome:
      "Enabled real-time compliance visibility and reduced audit preparation time significantly.",
  },
];

export default function CaseStudies() {
  return (
    <Reveal>
    <section
      id="casestudies"
      className="
        relative
        z-10
        overflow-hidden
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        py-16
        sm:py-20
      "
    >
      {/* GRID BACKGROUND */}
      <div className="
        absolute
        inset-0
        pointer-events-none
        opacity-30
        bg-[linear-gradient(rgba(0,255,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.05)_1px,transparent_1px)]
        bg-[size:40px_40px]
      " />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.04),transparent_70%)]"></div>

      {/* HEADER */}
      <div className="relative mb-14 sm:mb-16">
        <p className="
          text-green-400
          uppercase
          tracking-[0.35em]
          text-xs
          sm:text-sm
          mb-5
        ">
          Case Studies
        </p>

        <h2 className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
          leading-[1]
          mb-6
        ">
          Cyber
          <span className="block text-green-400">
            Intelligence Reports
          </span>
        </h2>

        <p className="
          max-w-3xl
          text-gray-400
          text-base
          sm:text-lg
          leading-relaxed
        ">
          Real-world cybersecurity consulting breakdowns including ISO 27001
          readiness, vulnerability assessments, and compliance system design.
        </p>
      </div>

      {/* GRID */}
      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        sm:gap-7
      ">
        {caseStudies.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              borderColor: "rgba(74,222,128,0.25)",
              boxShadow: "0px 0px 40px rgba(74,222,128,0.10)",
            }}
            className="
              relative
              rounded-[28px]
              border
              border-green-400/10
              bg-black/40
              backdrop-blur-3xl
              p-6
              sm:p-8
              flex
              flex-col
              min-h-[420px]
              overflow-hidden
              transition-all
              duration-500
            "
          >
            {/* top line */}
            <div className="
              absolute
              top-0
              left-0
              w-full
              h-px
              bg-gradient-to-r
              from-transparent
              via-green-400/40
              to-transparent
            " />

            <div className="relative flex flex-col h-full">

              {/* category */}
              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-green-400/10
                bg-green-400/5
                text-green-400
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                mb-6
                w-fit
              ">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                {item.category}
              </div>

              {/* title */}
              <h3 className="
                text-xl
                sm:text-2xl
                font-black
                text-white
                mb-5
                group-hover:text-green-400
                transition-all
                duration-500
              ">
                {item.title}
              </h3>

              {/* problem */}
              <p className="text-gray-400 text-sm mb-4">
                <span className="text-green-400/60 text-[10px] block mb-1 tracking-[0.2em]">
                  PROBLEM
                </span>
                {item.problem}
              </p>

              {/* solution */}
              <p className="text-gray-400 text-sm mb-4">
                <span className="text-green-400/60 text-[10px] block mb-1 tracking-[0.2em]">
                  SOLUTION
                </span>
                {item.solution}
              </p>

              {/* outcome */}
              <p className="text-gray-300 text-sm flex-1">
                <span className="text-green-400/60 text-[10px] block mb-1 tracking-[0.2em]">
                  OUTCOME
                </span>
                {item.outcome}
              </p>

              {/* footer */}
              <div className="
                mt-6
                flex
                items-center
                gap-2
                text-green-400/40
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                font-mono
                pt-4
              ">
                <div className="w-2 h-2 rounded-full bg-green-400/40"></div>
                CASE STUDY REPORT
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}