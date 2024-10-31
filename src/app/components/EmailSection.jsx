"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialLink = ({ href, icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="relative group"
  >
    <Link href={href} className="block p-3 bg-[#1A1A1A] rounded-xl hover:bg-[#2A2A2A] transition-all duration-300">
      <Image src={icon} alt={label} className="w-6 h-6" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </Link>
  </motion.div>
);

const InputField = ({ label, id, type = "text", placeholder, required = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group"
  >
    <label htmlFor={id} className="text-white block mb-2 text-sm font-medium">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        required={required}
        rows="4"
        className="w-full px-4 py-3 bg-[#18191E]/80 border border-[#33353F] rounded-lg text-white 
                 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                 transition duration-200 resize-none backdrop-blur-sm"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-3 bg-[#18191E]/80 border border-[#33353F] rounded-lg text-white 
                 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                 transition duration-200 backdrop-blur-sm"
        placeholder={placeholder}
      />
    )}
  </motion.div>
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen flex items-center py-24 px-4"
    >
      {/* Animated background elements */}
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
      </div>

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
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="h-full flex items-center justify-center"
              >
                <div className="bg-green-500/10 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-green-500 text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-xl font-medium">Message sent successfully!</p>
                    <p className="text-green-400/80 mt-2">I'll get back to you soon.</p>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-gray-800"
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
                  className={`
                    w-full px-6 py-3 rounded-lg font-medium text-white
                    bg-gradient-to-r from-primary-500 to-blue-600
                    hover:from-primary-600 hover:to-blue-700
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2
                  `}
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