import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about-us" className="py-12 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-8 md:mb-12"
      >
        <p className="text-[#B7B8BC] text-base md:text-lg mb-3 md:mb-4">About KliqOn Technologies</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#B7B8BC] mb-4 md:mb-6 px-4">Intelligent solutions. Built to scale.</h2>
        <p className="text-base md:text-xl text-[#B7B8BC] max-w-4xl mx-auto px-4">
          At KliqOn Technologies, we engineer possibilities by building scalable digital products that transform bold ideas into real impact, partnering with ambitious teams as co-builders of what's next.
        </p>
      </motion.div>
    </section>
  );
}

