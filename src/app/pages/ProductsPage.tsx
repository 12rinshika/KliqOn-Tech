import { motion } from "motion/react";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProductsPage() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6"
          >
            <span className="text-[#F3F3F3]">Our</span>{" "}
            <span className="text-[#0023E8]">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#B7B8BC] text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            We're crafting innovative solutions that will transform the way you work.
          </motion.p>

          {/* Construction Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-br from-[#0E1322] to-[#0023E8]/20 rounded-3xl p-8 md:p-12 lg:p-16 border border-[#0023E8]/30 shadow-2xl relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#0023E8]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 w-40 md:w-56 h-40 md:h-56 bg-[#B7B8BC]/10 rounded-full blur-3xl"
            />

            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 md:w-24 md:h-24 bg-[#0023E8]/30 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0023E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 relative z-10"
            >
              New Products Under Construction
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[#B7B8BC] text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10"
            >
              We're working hard to bring you innovative products that will revolutionize your workflow. Stay tuned for exciting updates!
            </motion.p>

            {/* Animated Dots */}
            <div className="flex justify-center gap-2 mb-8 relative z-10">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-[#0023E8] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Back Button */}
            <motion.button
              onClick={() => {
                navigate("/");
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 35, 232, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0023E8] text-[#F3F3F3] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium relative z-10"
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 md:top-40 left-4 md:left-20 w-12 md:w-20 h-12 md:h-20 rounded-full bg-[#0023E8]/20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 md:bottom-40 right-4 md:right-20 w-20 md:w-32 h-20 md:h-32 rounded-full bg-[#B7B8BC]/10 blur-xl"
        />
      </section>

      <Footer />
    </div>
  );
}

