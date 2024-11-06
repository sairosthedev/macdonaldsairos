"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Particle effect for background
const ParticleEffect = () => (
  <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: "100%",
          opacity: 0.2,
        }}
        animate={{
          y: "0%",
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </motion.div>
);

// Enhanced shimmer effect
const EnhancedShimmer = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
    <motion.div
      className="w-[500%] h-[500%] absolute -top-[200%] -left-[200%]"
      style={{
        background: `
          linear-gradient(
            45deg,
            transparent 20%,
            rgba(255, 255, 255, 0.03) 25%,
            transparent 30%
          )
        `,
        backgroundSize: '200% 200%',
      }}
      animate={{
        x: ['-200%', '0%'],
        y: ['-200%', '0%'],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
    />
  </div>
);

const SocialLink = ({ href, icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    <Link 
      href={href} 
      className="relative block p-4 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl 
                 hover:from-primary-900/80 hover:to-primary-800/80 transition-all duration-500 
                 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 overflow-hidden
                 border border-gray-800/50 hover:border-primary-500/50"
    >
      <EnhancedShimmer />
      <div className="relative z-10 flex items-center justify-center">
      <Image 
        src={icon} 
        alt={label} 
          className="w-6 h-6 group-hover:transform group-hover:rotate-12 transition-all duration-300" 
      />
      </div>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl
                   bg-gradient-to-r from-primary-500/90 to-blue-500/90 
                   text-white text-xs whitespace-nowrap
                   shadow-lg border border-white/10 backdrop-blur-sm
                   after:content-[''] after:absolute after:top-full after:left-1/2 
                   after:-translate-x-1/2 after:border-4 after:border-transparent
                   after:border-t-primary-500/90"
      >
        {label}
      </motion.span>
    </Link>
  </motion.div>
);

const InputField = ({ label, id, type = "text", placeholder, required = true }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative"
  >
    <label 
      htmlFor={id} 
        className={`
          text-sm font-medium tracking-wide transition-all duration-300
          ${isFocused ? 'text-primary-400' : 'text-white/80'}
        `}
    >
      {label}
    </label>
      <div className="relative mt-2">
        <EnhancedShimmer />
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows="4"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 bg-gradient-to-br from-[#18191E]/90 to-[#18191E]/80 
                     border border-[#33353F] rounded-lg text-white 
                     placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                     transition-all duration-300 resize-none backdrop-blur-sm
                     shadow-inner hover:shadow-lg hover:shadow-primary-500/5
                     focus:bg-gradient-to-br focus:from-[#1A1A1A]/95 focus:to-[#1A1A1A]/90"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 bg-gradient-to-br from-[#18191E]/90 to-[#18191E]/80 
                     border border-[#33353F] rounded-lg text-white 
                     placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                     transition-all duration-300 backdrop-blur-sm
                     shadow-inner hover:shadow-lg hover:shadow-primary-500/5
                     focus:bg-gradient-to-br focus:from-[#1A1A1A]/95 focus:to-[#1A1A1A]/90"
          placeholder={placeholder}
        />
      )}
      <motion.div
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.95,
          }}
          className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary-500/20 to-blue-500/20 
                     blur-xl transition-all duration-300"
      />
    </div>
  </motion.div>
  );
};

// Update the section background
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-500/20 to-transparent opacity-30"
    />
    <ParticleEffect />
  </div>
);

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (emailSubmitted) {
      const timer = setTimeout(() => setEmailSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || "Failed to send message");
      }

      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setError(`Failed to send message. Please try again later! Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const successVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const formContainer = `
    space-y-6 backdrop-blur-sm 
    bg-gradient-to-br from-black/40 to-black/30 
    p-8 rounded-2xl border border-gray-800
    shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 
    transition-all duration-500
    relative overflow-hidden
  `;

  const buttonStyles = `
    w-full px-6 py-3 rounded-lg font-medium text-white
    bg-gradient-to-r from-primary-500 to-blue-600
    hover:from-primary-600 hover:to-blue-700
    transition-all duration-500
    disabled:opacity-50 disabled:cursor-not-allowed
    flex items-center justify-center gap-2
    relative overflow-hidden
    shadow-lg hover:shadow-xl hover:shadow-primary-500/20
    transform hover:-translate-y-0.5
  `;

  const successMessage = (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="h-full flex items-center justify-center"
    >
      <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 p-8 rounded-2xl 
                      border border-green-500/20 backdrop-blur-sm shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-green-400 text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1,
              times: [0, 0.6, 1]
            }}
          >
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <p className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Message sent successfully!
          </p>
          <p className="text-green-400/80 mt-2">I'll get back to you soon.</p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen flex items-center py-24 px-4"
    >
      <BackgroundEffect />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 relative z-10"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-600">
                Let's Connect
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently exploring new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hello, I'll do my best to respond promptly!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <SocialLink href="https://github.com/miccx-24" icon={GithubIcon} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/macdonald-sairos-8b1686186/" icon={LinkedinIcon} label="LinkedIn" />
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {emailSubmitted ? (
              successMessage
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className={formContainer}
              >
                <InputField
                  label="Your email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <InputField
                  label="Subject"
                  id="subject"
                  placeholder="How can I help you?"
                />
                <InputField
                  label="Message"
                  id="message"
                  type="textarea"
                  placeholder="Let's discuss..."
                />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/20 rounded-lg p-4"
                  >
                    <p className="text-red-500 text-sm">{error}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className={buttonStyles}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </motion.div>
                  ) : (
                    <>
                      Send Message
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        animate={{ x: 3 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;