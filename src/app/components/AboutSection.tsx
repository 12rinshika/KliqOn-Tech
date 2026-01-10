import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden py-14 md:py-20 px-4 md:px-6 bg-[#0a1225] rounded-xl"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            About KliqOn Technologies
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-[#F3F3F3] leading-tight mb-6">
            Intelligent solutions.
            <br />
            <span className="text-blue-500">Built to scale.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 text-justify">
            At KliqOn Technologies, we engineer possibilities by crafting scalable,
            future-ready digital products. We collaborate with ambitious teams to
            turn bold ideas into meaningful, measurable impact.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md max-w-md md:max-w-lg"
          >
            {/* GIF */}
            <img
              src="/about/source.gif"
              alt="KliqOn team collaboration"
              className="w-full h-full object-cover"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F1A]/80 via-[#0B1F3A]/50 to-[#1E4ED8]/30" />

            {/* ANIMATED SHIMMER */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* SOFT GLOW */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
