<section
  id="services"
  className="relative z-10 max-w-7xl mx-auto px-6 py-12"
>
  <div className="
    rounded-[30px]
    border
    border-green-400/10
    bg-black/40
    backdrop-blur-2xl
    p-8
    lg:p-10
  ">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

      <div>
        <p className="text-green-400 text-xs tracking-[0.35em] uppercase mb-3">
          Consulting Services
        </p>

        <h2 className="text-2xl sm:text-3xl font-black mb-4">
          Cybersecurity Consulting
        </h2>

        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "ISO 27001",
            "IT Auditing",
            "Vulnerability Assessment",
            "Risk Assessment",
            "Compliance",
            "Digital Trust",
          ].map((service) => (
            <span
              key={service}
              className="
                px-4 py-2
                rounded-full
                border
                border-green-400/10
                bg-green-400/5
                text-green-400
              "
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className="
          inline-flex
          items-center
          justify-center
          px-8
          py-4
          rounded-2xl
          bg-green-400
          text-black
          font-bold
          hover:scale-105
          transition-all
          duration-300
          whitespace-nowrap
        "
      >
        Request Consultation
      </a>

    </div>
  </div>
</section>