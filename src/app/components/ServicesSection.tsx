import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "../data/constants";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<keyof typeof services>("website");

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#F3F3F3] mb-3 md:mb-4 px-4">Our Services & Solutions</h2>
        <p className="text-lg md:text-2xl lg:text-3xl text-[#F3F3F3] px-4">
          We offer a comprehensive range of technology services designed to accelerate your digital transformation journey.
        </p>
      </motion.div>

      {/* Service Selection Buttons */}
      <div className="container mx-auto flex justify-center gap-3 md:gap-6 lg:gap-8 mb-8 md:mb-12 flex-wrap px-4">
        {Object.entries(services).map(([key, service], index) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedService(key as keyof typeof services)}
            className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full border-2 transition-all text-sm md:text-base ${
              selectedService === key
                ? "bg-[#0023E8] border-[#0023E8] text-[#F3F3F3]"
                : "border-[#0023E8] text-[#B7B8BC] hover:border-[#0023E8] hover:bg-[#0023E8]/10"
            }`}
          >
            {service.title.split(" ")[0]}
          </motion.button>
        ))}
      </div>

      {/* Selected Service Display */}
      <motion.div
        key={selectedService}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl px-4"
      >
        <div className="bg-gradient-to-br from-[#0E1322] to-[#0023E8]/20 rounded-3xl p-4 md:p-6 lg:p-8 border border-[#0023E8]/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 md:mb-4">{services[selectedService].title}</h3>
              <p className="text-[#B7B8BC] text-base md:text-lg">
                {services[selectedService].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2"
            >
              <ImageWithFallback
                src={services[selectedService].image}
                alt={services[selectedService].title}
                className="w-full h-48 md:h-64 lg:h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

