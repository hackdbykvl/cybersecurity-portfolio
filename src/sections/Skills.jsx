import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const skills = [
  {
    title: "ISO 27001",
    description:
      "Information security governance, risk management, compliance readiness, and security framework alignment.",
  },

  {
    title: "OWASP ZAP",
    description:
      "Web application security testing, vulnerability assessment workflows, and attack surface analysis.",
  },

  {
    title: "IT Auditing",
    description:
      "Security control evaluation, operational review processes, compliance verification, and infrastructure assessment.",
  },

  {
    title: "Threat Intelligence",
    description:
      "Security monitoring concepts, cyber threat awareness, operational visibility, and intelligence-driven defense.",
  },

  {
    title: "Risk Assessment",
    description:
      "Infrastructure risk evaluation, vulnerability prioritization, mitigation planning, and security analysis.",
  },

  {
    title: "Vulnerability Assessment",
    description:
      "Identification of security weaknesses across systems, applications, and infrastructure environments.",
  },
];

export default function Skills() {
  return (

    <Reveal>

      <section
        id="skills"
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-16
          sm:py-20
          overflow-hidden
        "
      >

        {/* Background Glow */}
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

            Expertise

          </p>

          <h2 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            leading-[1]
            mb-6
          ">

            Security

            <span className="block text-green-400">
              Capabilities
            </span>

          </h2>

          <p className="
            max-w-3xl
            text-gray-400
            text-base
            sm:text-lg
            leading-relaxed
          ">

            Cybersecurity-focused capabilities centered around
            compliance, infrastructure security, operational
            visibility, and enterprise defense readiness.

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

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}

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
                delay: index * 0.12,
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

              {/* Hover Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.08),transparent_70%)]
              "></div>

              {/* Mini Status */}
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

                ACTIVE

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

                {skill.title}

              </h3>

              {/* Description */}
              <p className="
                relative
                text-gray-400
                leading-relaxed
                text-sm
                sm:text-base
              ">

                {skill.description}

              </p>

              {/* Bottom Label */}
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

                VERIFIED CAPABILITY

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </Reveal>
  );
}