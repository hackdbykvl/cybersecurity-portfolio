import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import RadarScanner from "../components/RadarScanner";

const projects = [
  {
    title: "Cybersecurity Consultant Platform",

    category: "Security Infrastructure",

    description:
      "Professional cybersecurity consulting platform focused on digital trust, operational visibility, secure infrastructure, and enterprise security positioning.",
  },

  {
    title: "ISO 27001 Readiness Workflow",

    category: "Compliance Operations",

    description:
      "Structured compliance workflow system designed around risk assessment, audit preparation, governance alignment, and security documentation strategy.",
  },

  {
    title: "OWASP ZAP Security Lab",

    category: "Vulnerability Assessment",

    description:
      "Security testing environment focused on reconnaissance workflows, vulnerability analysis, attack surface evaluation, and operational reporting.",
  },
];

export default function Projects() {
  return (

    <Reveal delay={0.1}>

      <section
        id="projects"
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

        {/* Radar System */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">

          <RadarScanner />

        </div>

        {/* Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.04),transparent_70%)]"></div>

        {/* Header */}
        <div className="relative mb-14 sm:mb-16">

          <p className="
            text-green-400
            uppercase
            tracking-[0.35em]
            text-xs
            sm:text-sm
            mb-5
          ">

            Projects

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
              Operations
            </span>

          </h2>

          <p className="
            max-w-3xl
            text-gray-400
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Security-focused operational systems centered around
            cybersecurity consulting, compliance readiness,
            vulnerability assessment, and secure infrastructure workflows.

          </p>

        </div>

        {/* Grid */}
        <div className="
          relative
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-7
        ">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -8,
                borderColor: "rgba(74,222,128,0.25)",
                boxShadow:
                  "0px 0px 40px rgba(74,222,128,0.10)",
              }}

              className="
                group
                relative
                rounded-[28px]
                border
                border-green-400/10
                bg-black/40
                backdrop-blur-3xl
                overflow-hidden
                p-6
                sm:p-8
                transition-all
                duration-500
              "
            >

              {/* Tactical Top Line */}
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
              "></div>

              {/* Hover Atmosphere */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.08),transparent_70%)]
              "></div>

              {/* Category */}
              <div className="
                relative
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
              ">

                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                {project.category}

              </div>

              {/* Title */}
              <h3 className="
                relative
                text-xl
                sm:text-2xl
                font-black
                text-white
                leading-snug
                mb-5
                group-hover:text-green-400
                transition-all
                duration-500
              ">

                {project.title}

              </h3>

              {/* Description */}
              <p className="
                relative
                text-gray-400
                leading-relaxed
                text-sm
                sm:text-base
              ">

                {project.description}

              </p>

              {/* Bottom Status */}
              <div className="
                relative
                mt-8
                flex
                items-center
                gap-2
                text-green-400/40
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                font-mono
              ">

                OPERATIONAL SYSTEM

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </Reveal>
  );
}