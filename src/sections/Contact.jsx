import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.target);
    
    // Web3Forms
    formData.append(
      "access_key",
      "Enteryouaccesskey" 
    );

    formData.append(
      "subject",
      "New Cybersecurity Portfolio Message"
    );

    formData.append(
      "from_name",
      "HACKDBYKVL Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        e.target.reset();

        setTimeout(() => {
          window.location.href =
            "https://hackdbykvl.github.io/cybersecurity-portfolio/";
        }, 2500);
      } else {
        setError(
  <>
    Secure transmission failed. Report to{" "}
    <a
      href="mailto:Namahindia9@gmail.com"
      className="text-green-400 underline hover:text-green-300"
    >
      Namahindia9@gmail.com
    </a>
  </>
);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Reveal delay={0.2}>
      <section
        id="contact"
        className="
          relative
          max-w-[1450px]
          mx-auto
          px-4
          sm:px-6
          py-16
          sm:py-20
          overflow-hidden
        "
      >
        {/* Atmospheric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)]"></div>

        {/* Main Container */}
        <div
          className="
            relative
            overflow-hidden
            rounded-4xl
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
              opacity: [0.2, 1, 0.2],
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
    gap-6
    lg:gap-8
    items-start
  "
>
              {/* LEFT SIDE */}
              <div className="space-y-5 sm:space-y-6">
                {/* Status Card */}
                <div
                 className="
rounded-2xl
border
border-green-400/10
bg-white/[0.02]
backdrop-blur-xl
px-5
py-4
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
    rounded-2xl
    border
    border-green-400/10
    bg-white/2
    backdrop-blur-xl
    p-4
    sm:p-5
    space-y-6
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
<div
  className="
    relative
    overflow-hidden
    rounded-2xl
    border
    border-green-400/10
    bg-black/40
    p-3
  "
>

  {/* Radar Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08),transparent_70%)]" />

  {/* Scanning Line */}
  <motion.div
    animate={{
      y: ["-100%", "250%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      left-0
      w-full
      h-px
      bg-green-400/60
      blur-sm
    "
  />

  {/* Mini Grid */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.2)_1px,transparent_1px)] bg-[size:18px_18px]" />
  </div>

<div className="relative z-10 space-y-3 text-sm">

{/* Remote */}
<div className="flex items-center justify-between">

<div className="flex items-center gap-2 min-w-0">

    {/* YOUR REMOTE BADGE */}
<span className="flex items-center gap-2 min-w-0">

      <motion.span
        animate={{
          boxShadow: [
            "0 0 0px rgba(74,222,128,0)",
            "0 0 8px rgba(74,222,128,0.5)",
            "0 0 0px rgba(74,222,128,0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-[2px]
          border
          border-white/10
          w-5
          h-3
          bg-slate-900
        "
      >
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            w-[3px]
            h-[3px]
            rounded-full
            bg-green-400
          "
        />

        <span className="absolute left-[2px] top-[2px] w-[2px] h-[2px] rounded-full bg-cyan-400"></span>
        <span className="absolute right-[2px] top-[2px] w-[2px] h-[2px] rounded-full bg-cyan-400"></span>
        <span className="absolute left-[2px] bottom-[2px] w-[2px] h-[2px] rounded-full bg-cyan-400"></span>

        <span className="absolute left-[5px] top-[3px] w-[4px] h-px bg-green-400/70"></span>
        <span className="absolute right-[5px] top-[3px] w-[4px] h-px bg-green-400/70"></span>
        <span className="absolute left-[5px] bottom-[3px] w-[4px] h-px bg-green-400/70"></span>
      </motion.span>

<span
  className="
    text-green-400
    font-semibold
    text-[11px]
    sm:text-sm
    leading-none
    whitespace-nowrap
  "
>
  REMOTE OPERATIONS
</span>

    </span>

  </div>

<span
  className="
    text-[10px]
    sm:text-xs
    text-green-400/60
    font-mono
    whitespace-nowrap
  "
>
  ONLINE
</span>

</div>

{/* IND */}
<div className="flex items-center justify-between">

  <span className="flex items-center gap-2">

    <motion.span
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="
        inline-flex
        flex-col
        overflow-hidden
        rounded-[2px]
        border
        border-white/10
        w-5
        h-3
      "
    >
      <span className="flex-1 bg-orange-400"></span>
      <span className="flex-1 bg-white"></span>
      <span className="flex-1 bg-green-400"></span>
    </motion.span>

    <span className="font-semibold">
      <span className="text-orange-400">I</span>
      <span className="text-white">N</span>
      <span className="text-green-400">D</span>
    </span>

  </span>

<span
  className="
    text-green-400
    text-xs
    sm:text-sm
    font-mono
    whitespace-nowrap
  "
>
  GMT +5:30
</span>

</div>



{/* Secure Connection Tunnel */}
<div className="relative py-2">

  {/* Connection Line */}
  <div className="relative flex items-center justify-between">

    {/* India Node */}
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0px rgba(74,222,128,0.3)",
          "0 0 18px rgba(74,222,128,0.8)",
          "0 0 0px rgba(74,222,128,0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        w-3
        h-3
        rounded-full
        bg-green-400
        relative
        z-10
      "
    />

    {/* Tunnel */}
    <div className="absolute left-2 right-2 h-px bg-green-400/20 overflow-hidden">

      <motion.div
        animate={{
          x: ["-20%", "730%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          w-12
          h-px
          bg-linear-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

    </div>

    {/* Remote Node */}
<motion.div
  animate={{
    boxShadow: [
      "0 0 0px rgba(251,146,60,0.3)",
      "0 0 18px rgba(251,146,60,0.8)",
      "0 0 0px rgba(251,146,60,0.3)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
    w-3
    h-3
    rounded-full
    bg-orange-400
    relative
    z-10
  "
/>

  </div>

  {/* Status */}
<div
  className="
    mt-3
    grid
    grid-cols-3
    items-center
  "
>
  <span
    className="
      text-[8px]
      sm:text-[10px]
      text-green-400/60
      font-mono
      tracking-wider
      text-left
    "
  >
    INDIA NODE
  </span>

{/* SECURE TUNNEL ACTIVE */}
<motion.span
  animate={{
    opacity: [0.5, 1, 0.5],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
  }}
  className="
    text-[8px]
    sm:text-[10px]
    text-cyan-400
    font-mono
    tracking-wider
    text-center
    whitespace-nowrap
  "
>
  <span className="sm:hidden">
    SECURE TUNNEL
  </span>

  <span className="hidden sm:inline">
    SECURE TUNNEL ACTIVE
  </span>
</motion.span>

  <span
    className="
      text-[8px]
      sm:text-[10px]
      text-green-400/60
      font-mono
      tracking-wider
      text-right
      sm:text-right
      text-center
    "
  >
    REMOTE NODE
  </span>
</div>

</div>

  </div>

</div>

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
                      NETWORK
                    </p>

<div className="grid grid-cols-3 gap-3">

  {/* GitHub */}
<motion.a whileHover={{
  y: -6,
  scale: 1.05,
  boxShadow: "0 0 25px rgba(74,222,128,0.25)",
}}

whileTap={{
  scale: 0.98,
}}
  href="https://github.com/hackdbykvl"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    flex-col
    items-center
    justify-center
    text-center
    gap-1
    rounded-2xl
    border
    border-green-400/10
    bg-green-400/[0.03]
py-4 px-3 min-h-[90px]
    hover:border-green-400/40
    hover:bg-green-400/[0.06]
    transition-all
  "
>
<motion.div
  animate={{
    y: [0, -3, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <FaGithub
    size={18}
    className="text-green-400"
  />
</motion.div>

  <span className="text-xs font-semibold text-white">
    GitHub
  </span>

  <span className="text-[10px] text-green-400/70">
    Projects
  </span> 
</motion.a>


  {/* LinkedIn */}
<motion.a
whileHover={{
  y: -6,
  scale: 1.05,
boxShadow: "0 0 25px rgba(34,211,238,0.25)"
}}

whileTap={{
  scale: 0.98,
}}
  href="https://www.linkedin.com/in/keval-brahmbhatt-108a49121"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    flex-col
    items-center
    justify-center
    text-center
    gap-1
    rounded-2xl
    border
    border-cyan-400/10
    bg-cyan-400/3
py-4 px-3 min-h-[90px]
    hover:border-cyan-400/40
    hover:bg-cyan-400/6
    transition-all
  "
>
<motion.div
  animate={{
    y: [0, -3, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <FaLinkedin
    size={18}
    className="text-cyan-400"
  />
</motion.div>

  <span className="text-xs font-semibold text-white">
    LinkedIn
  </span>

  <span className="text-[10px] text-cyan-400/70">
    Profile
  </span>
</motion.a>

  {/* Email */}
<motion.a
whileHover={{
  y: -6,
  scale: 1.05,
boxShadow: "0 0 25px rgba(251,146,60,0.25)"
}}

whileTap={{
  scale: 0.98,
}}
  href="mailto:Namahindia9@gmail.com"
  className="
    group
    flex
    flex-col
    items-center
    justify-center
    text-center
    gap-1
    rounded-2xl
    border
    border-orange-400/10
    bg-orange-400/[0.03]
py-4 px-3 min-h-[90px]
    hover:border-orange-400/40
    hover:bg-orange-400/[0.06]
    transition-all
  "
>
<motion.div
  animate={{
    y: [0, -3, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
<MdEmail
  size={18}
  className="text-orange-400"
/>
</motion.div>

  <span className="text-xs font-semibold text-white">
    Email
  </span>

  <span className="text-[10px] text-orange-400/70">
    Contact
  </span>
</motion.a>

</div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
space-y-5
rounded-3xl
border
border-green-400/10
bg-white/[0.02]
backdrop-blur-xl
p-5
sm:p-6
lg:p-7
"
              >
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

                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-2xl
                      border
                      border-green-400/20
                      bg-green-400/10
                      text-green-300
                      px-5
                      py-4
                      text-sm
                      backdrop-blur-xl
                    "
                  >
                    ✅ Secure transmission successful. Redirecting...
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-2xl
                      border
                      border-red-500/20
                      bg-red-500/10
                      text-red-300
                      px-5
                      py-4
                      text-sm
                    "
                  >
                    {error}
                  </motion.div>
                )}

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
                    disabled={loading}
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
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                  >
                    <span className="relative z-10">
                      {loading ? "SENDING..." : "SEND MESSAGE"}
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
  );
}