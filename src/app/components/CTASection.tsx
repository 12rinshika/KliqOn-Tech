import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <div className="bg-[#0023E8] rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl"
          />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 md:w-20 h-16 md:h-20 bg-[#B7B8BC] rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center relative z-10"
          >
            <svg className="w-8 md:w-10 h-8 md:h-10 text-[#0E1322]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 md:mb-4 relative z-10 px-4">Ready to Transform Your Business?</h2>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 px-4 relative z-10">
            Let's discuss how our technology solutions can help you achieve your goals. Get in touch for a free consultation.
          </p>
          
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(14, 19, 34, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0E1322] text-[#F3F3F3] px-6 md:px-10 py-3 md:py-4 rounded-2xl text-lg md:text-xl inline-flex items-center gap-2 relative z-10"
          >
            Schedule a call →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

