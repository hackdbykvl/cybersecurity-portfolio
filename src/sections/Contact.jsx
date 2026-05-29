import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

export default function Contact() {
return ( <Reveal delay={0.2}> <section
     id="contact"
     className="
       relative
       max-w-7xl
       mx-auto
       px-4
       sm:px-6
       py-16
       sm:py-20
       overflow-hidden
     "
   >
{/* Atmospheric Glow */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)]"></div>

```
    {/* Main Container */}
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        sm:rounded-[38px]
        border
        border-green-400/10
        bg-[#050505]/90
        backdrop-blur-3xl
      "
    >
      {/* Tactical Grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[300px] sm:h-[400px] bg-green-400/[0.03] blur-3xl rounded-full"></div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>

      {/* Animated Scan Line */}
      <motion.div
        animate={{
          x: ["-100%", "120%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 w-1/3 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent blur-sm"
      />

      <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-14">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-4
              sm:px-5
              py-2
              rounded-full
              border
              border-green-400/10
              bg-green-400/[0.03]
              text-green-400
              text-[10px]
              tracking-[0.35em]
              mb-8
              backdrop-blur-xl
            "
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

            SECURE COMMUNICATION CHANNEL
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              mb-7
            "
          >
            Let’s Build

            <span className="block text-green-400">
              Secure Infrastructure
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              text-gray-400
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Open for cybersecurity consulting, compliance systems,
            IT auditing, vulnerability assessments,
            and secure digital operations.
          </p>
        </div>

        {/* Main Layout */}
        <div
          className="
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-8
            lg:gap-10
            items-start
          "
        >
          {/* LEFT SIDE */}
          <div className="space-y-5 sm:space-y-6">
            {/* Status Card */}
            <div
              className="
                rounded-3xl
                border
                border-green-400/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-5
                sm:p-6
              "
            >
              <p
                className="
                  text-green-400/60
                  text-[10px]
                  sm:text-xs
                  tracking-[0.35em]
                  font-mono
                  mb-5
                "
              >
                STATUS
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                  text-sm
                  sm:text-base
                "
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                Available For Secure Collaboration
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="
                rounded-3xl
                border
                border-green-400/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-5
                sm:p-6
                space-y-7
              "
            >
              <div>
                <p
                  className="
                    text-green-400/60
                    text-[10px]
                    sm:text-xs
                    tracking-[0.35em]
                    font-mono
                    mb-3
                  "
                >
                  LOCATION
                </p>

                <p className="text-gray-300 text-sm sm:text-base">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <div>
                <p
                  className="
                    text-green-400/60
                    text-[10px]
                    sm:text-xs
                    tracking-[0.35em]
                    font-mono
                    mb-3
                  "
                >
                  EMAIL
                </p>

                <p className="text-gray-300 text-sm sm:text-base">
                  yourmail@example.com
                </p>
              </div>

              {/* Links */}
              <div>
                <p
                  className="
                    text-green-400/60
                    text-[10px]
                    sm:text-xs
                    tracking-[0.35em]
                    font-mono
                    mb-4
                  "
                >
                  NETWORK
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://github.com/hackdbykvl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      sm:px-5
                      py-3
                      rounded-2xl
                      border
                      border-green-400/10
                      bg-green-400/[0.03]
                      text-green-400/70
                      text-xs
                      sm:text-sm
                      tracking-[0.25em]
                      transition-all
                      duration-300
                      hover:border-green-400/30
                      hover:text-green-300
                      hover:bg-green-400/[0.05]
                    "
                  >
                    GITHUB
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      sm:px-5
                      py-3
                      rounded-2xl
                      border
                      border-green-400/10
                      bg-green-400/[0.03]
                      text-green-400/70
                      text-xs
                      sm:text-sm
                      tracking-[0.25em]
                      transition-all
                      duration-300
                      hover:border-green-400/30
                      hover:text-green-300
                      hover:bg-green-400/[0.05]
                    "
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="3cebe7d5-e422-4d46-8185-6134abddc383"
            />

            <input
              type="hidden"
              name="subject"
              value="New Cybersecurity Portfolio Message"
            />

            <input
              type="hidden"
              name="from_name"
              value="HACKDBYKVL Portfolio"
            />

            <input
              type="hidden"
              name="redirect"
              value="https://hackdbykvl.github.io/cybersecurity-portfolio/?success=true"
            />

            {/* Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                autoComplete="name"
                minLength={2}
                aria-label="Your Name"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-green-400/10
                  bg-black/40
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-green-400/30
                  focus:bg-black/60
                "
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="email"
                aria-label="Your Email"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-green-400/10
                  bg-black/40
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-green-400/30
                  focus:bg-black/60
                "
              />
            </div>

            {/* Message */}
            <textarea
              rows={6}
              placeholder="Transmit secure message..."
              name="message"
              required
              minLength={10}
              aria-label="Your Message"
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                border-green-400/10
                bg-black/40
                text-white
                placeholder:text-gray-600
                outline-none
                resize-none
                transition-all
                duration-300
                focus:border-green-400/30
                focus:bg-black/60
              "
            />

            {/* Bottom */}
            <div
              className="
                flex
                flex-col
                md:flex-row
                items-start
                md:items-center
                justify-between
                gap-5
                pt-2
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-green-400/50
                  text-[10px]
                  sm:text-xs
                  tracking-[0.3em]
                  font-mono
                "
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                ENCRYPTED TRANSMISSION ACTIVE
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  group
                  relative
                  overflow-hidden
                  px-7
                  sm:px-8
                  py-4
                  rounded-2xl
                  bg-green-400
                  text-black
                  text-sm
                  sm:text-base
                  font-black
                  tracking-[0.18em]
                  transition-all
                  duration-300
                  hover:shadow-[0_0_40px_rgba(74,222,128,0.35)]
                "
              >
                <span className="relative z-10">
                  SEND MESSAGE
                </span>

                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</Reveal>
)
}