import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { techStacks } from "../data/constants";

export function TechStackSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-transparent to-[#0023E8]/10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-8 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#F3F3F3] mb-3 md:mb-4 px-4">Tech Stack We Specialize In</h2>
        <p className="text-lg md:text-2xl lg:text-3xl text-[#F3F3F3] px-4">
          From frontend finesse to backend power — we build with the best tools in the tech game.
        </p>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
        {techStacks.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className="bg-[#242f6c] rounded-2xl p-4 md:p-6 border border-[#0023E8]/30 shadow-xl hover:shadow-2xl transition-all overflow-hidden h-80 md:h-96 flex flex-col">
              {/* Tech Image */}
              <motion.div
                className="mb-4 md:mb-6 rounded-xl overflow-hidden h-32 md:h-40 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <ImageWithFallback
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-medium text-white mb-2 md:mb-3">{tech.title}</h3>
              <p className="text-[#B7B8BC] text-sm md:text-base flex-1">{tech.description}</p>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0023E8]/0 to-[#0023E8]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

