import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
  parallaxY: any;
  parallaxOpacity: any;
}

export function HeroSection({ heroRef }: HeroSectionProps) {
  const navigate = useNavigate();
  const illustrationRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });
  const smoothMouseY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothMouseY,
    [-300, 300],
    [10, -10],
  );
  const rotateY = useTransform(
    smoothMouseX,
    [-300, 300],
    [-10, 10],
  );
  const translateX = useTransform(
    smoothMouseX,
    [-300, 300],
    [-20, 20],
  );
  const translateY = useTransform(
    smoothMouseY,
    [-300, 300],
    [-20, 20],
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!illustrationRef.current) return;
    const rect = illustrationRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden px-4">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
          >
            <span className="text-[#F3F3F3]">Transforming Ideas</span>{" "}
            <span className="text-[#0023E8]">Into Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[#F3F3F3] text-base md:text-lg leading-relaxed"
          >
            We build innovative technology solutions that empower businesses to thrive in the digital age. Our cutting-edge products and services drive growth, efficiency, and competitive advantage.
          </motion.p>

          <motion.button
            onClick={() => navigate("/contact")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 35, 232, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0023E8] text-[#F3F3F3] px-6 md:px-8 py-3 md:py-4 rounded-2xl text-lg md:text-xl"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Content - Interactive 3D Illustration */}
        <motion.div
          ref={illustrationRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <motion.div
            className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0023E8]/30"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Parallax Image Layer */}
            <motion.div
              className="absolute inset-0"
              style={{
                x: translateX,
                y: translateY,
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjY1NTMyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Coding"
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0023E8]/50 to-transparent" />

            {/* Floating Element 1 */}
            <motion.div
              className="absolute top-10 left-10 w-16 h-16 bg-[#0023E8] rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Element 2 */}
            <motion.div
              className="absolute bottom-20 right-10 w-12 h-12 border-2 border-[#F3F3F3] rounded-lg"
              animate={{
                rotate: [0, 180, 360],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Element 3 */}
            <motion.div
              className="absolute top-1/2 right-20 w-8 h-8 bg-[#B7B8BC] rounded-full"
              animate={{
                x: [0, 20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

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
  );
}