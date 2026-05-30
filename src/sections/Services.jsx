import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ServiceRadar from "../components/ServiceRadar";

const services = [
  "ISO 27001 Readiness",
  "IT Auditing",
  "Vulnerability Assessment",
  "Risk Assessment",
  "Security Compliance",
  "Digital Trust Advisory",
];

export default function Services() {
  return (
    <Reveal>
      <section
        id="services"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-green-400/10 bg-black/40 backdrop-blur-3xl p-6 sm:p-8">
            <ServiceRadar />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)]" />

          <div className="relative">

            <p className="text-green-400 text-xs tracking-[0.35em] uppercase mb-3">
              Services
            </p>

            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Cybersecurity
              <span className="block text-green-400">
                Consulting Services
              </span>
            </h2>

            <p className="text-gray-400 max-w-3xl mb-8">
              Supporting organizations with compliance readiness,
              cybersecurity assessments, governance, and digital trust initiatives.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ scale: 1.04 }}
                  className="px-4 py-2 rounded-full border border-green-400/10 bg-green-400/5 text-sm text-green-400"
                >
                  {service}
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-green-400
                text-black
                font-bold
                hover:scale-105
                transition-all
              "
            >
              Request Consultation
            </a>

          </div>
        </div>
      </section>
    </Reveal>
  );
}