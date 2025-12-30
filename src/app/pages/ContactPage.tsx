import { motion } from "motion/react";
import { useState, FormEvent, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  useLayoutEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 px-4 overflow-hidden">
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
            <span className="text-[#F3F3F3]">Get in</span>{" "}
            <span className="text-[#0023E8]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#B7B8BC] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </motion.p>
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

      {/* Contact Form Section */}
      <section className="pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0E1322] to-[#0023E8]/20 rounded-3xl p-6 md:p-8 lg:p-12 border border-[#0023E8]/30 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#F3F3F3] text-sm md:text-base font-medium mb-2">
                  Name <span className="text-[#0023E8]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#242f6c]/50 border border-[#B7B8BC]/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-[#F3F3F3] placeholder-[#B7B8BC]/50 focus:outline-none focus:ring-2 focus:ring-[#0023E8] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#F3F3F3] text-sm md:text-base font-medium mb-2">
                  Email <span className="text-[#0023E8]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#242f6c]/50 border border-[#B7B8BC]/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-[#F3F3F3] placeholder-[#B7B8BC]/50 focus:outline-none focus:ring-2 focus:ring-[#0023E8] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[#F3F3F3] text-sm md:text-base font-medium mb-2">
                  Message <span className="text-[#0023E8]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#242f6c]/50 border border-[#B7B8BC]/20 rounded-xl px-4 md:px-6 py-3 md:py-4 text-[#F3F3F3] placeholder-[#B7B8BC]/50 focus:outline-none focus:ring-2 focus:ring-[#0023E8] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400 text-center"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-400 text-center"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 0 30px rgba(0, 35, 232, 0.5)" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="flex-1 bg-[#0023E8] text-[#F3F3F3] px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium border-2 border-[#0023E8] text-[#0023E8] hover:bg-[#0023E8]/10 transition-all"
                >
                  Back to Home
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="bg-[#242f6c]/30 backdrop-blur-lg rounded-2xl p-6 border border-[#B7B8BC]/20 text-center">
              <div className="w-12 h-12 bg-[#0023E8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0023E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#F3F3F3] font-medium mb-2">Email</h3>
              <p className="text-[#B7B8BC] text-sm">contact@kliqon.com</p>
            </div>

            <div className="bg-[#242f6c]/30 backdrop-blur-lg rounded-2xl p-6 border border-[#B7B8BC]/20 text-center">
              <div className="w-12 h-12 bg-[#0023E8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0023E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-[#F3F3F3] font-medium mb-2">Phone</h3>
              <p className="text-[#B7B8BC] text-sm">+91 1234567890</p>
            </div>

            <div className="bg-[#242f6c]/30 backdrop-blur-lg rounded-2xl p-6 border border-[#B7B8BC]/20 text-center">
              <div className="w-12 h-12 bg-[#0023E8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0023E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#F3F3F3] font-medium mb-2">Location</h3>
              <p className="text-[#B7B8BC] text-sm">Hyderabad, IN</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

