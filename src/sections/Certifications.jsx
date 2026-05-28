import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

const credentials = [
  {
    title: "Certified Ethical Hacker (CEH)",
    subtitle: "EC-Council",
    year: "2012",
    description:
      "Foundation in ethical hacking, vulnerability assessment, reconnaissance, and cybersecurity operations.",
  },

  {
    title: "Master of Computer Applications (MCA)",
    subtitle: "GUJARAT TECHNOLOGICAL UNIVERSITY",
    year: "2016",
    description:
      "Advanced education focused on computer systems, networking, information technology, and digital infrastructure.",
  },

  {
    title: "Cybersecurity & Compliance Focus",
    subtitle: "Current Specialization",
    year: "Active",
    description:
      "Focused on IT auditing, ISO 27001 readiness, cybersecurity consulting, security operations, and digital trust systems.",
  },
];

export default function Credentials() {
  return (
    <Reveal>

      <section
        id="credentials"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.04),transparent_70%)]"></div>

        {/* Header */}
        <div className="relative mb-16">

          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            Credentials
          </p>

          <h2 className="text-5xl font-black leading-tight mb-6">

            Security
            <span className="block text-green-400">
              Certifications
            </span>

            & Education

          </h2>

          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
            Technical foundation and cybersecurity-focused learning
            centered around secure systems, compliance, digital
            infrastructure, and enterprise security operations.
          </p>

        </div>

        {/* Grid */}
        <div className="relative grid lg:grid-cols-3 gap-8">

          {credentials.map((item, index) => (

            <motion.div
              key={item.title}

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
                delay: index * 0.2,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -8,
                boxShadow:
                  "0px 0px 40px rgba(74,222,128,0.12)",
              }}

              className="group relative rounded-[28px] border border-green-400/10 bg-black/40 backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500"
            >

              {/* Tactical Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>

              {/* Year */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/10 bg-green-400/5 text-green-400 text-xs tracking-[0.3em] mb-6">

                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                {item.year}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white leading-snug mb-3 group-hover:text-green-400 transition-all duration-500">

                {item.title}

              </h3>

              {/* Subtitle */}
              <p className="text-green-400 text-sm uppercase tracking-[0.25em] mb-5">

                {item.subtitle}

              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">

                {item.description}

              </p>

              {/* Bottom Accent */}
              <div className="mt-8 flex items-center gap-2 text-green-400/40 text-xs tracking-[0.3em] font-mono">

                VERIFIED RECORD

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </Reveal>
  );
}