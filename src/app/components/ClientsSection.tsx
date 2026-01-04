import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { clients } from "../data/constants";

export function ClientsSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-8 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#F3F3F3] px-4">
          Who We've Worked With
        </h2>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
        {clients.map((client, index) => {
          // Determine direction based on grid position (0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right)
          const position = index % 4;
          const getInitialPosition = () => {
            switch (position) {
              case 0:
                return { x: -100, y: -100 }; // top-left
              case 1:
                return { x: 100, y: -100 }; // top-right
              case 2:
                return { x: -100, y: 100 }; // bottom-left
              case 3:
                return { x: 100, y: 100 }; // bottom-right
              default:
                return { x: 0, y: 0 };
            }
          };

          return (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, ...getInitialPosition() }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div className="relative h-64 md:h-80 lg:h-96">
                <ImageWithFallback
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0023E8]/80 to-transparent" />
                <motion.h3
                  className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-xl md:text-2xl font-medium text-[#F3F3F3] z-10 pr-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {client.title}
                </motion.h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
