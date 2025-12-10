"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Let's Collaborate
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mt-4 leading-relaxed">
            Have a project in mind? Looking for a technical partner?
            Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary-500/10 text-primary-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <Link href="mailto:macdonaldsairos@gmail.com" className="text-white hover:text-primary-400 transition-colors">
                      macdonaldsairos@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary-500/10 text-secondary-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <Link href="tel:+263786033933" className="text-white hover:text-secondary-400 transition-colors">
                      +263 786 033 933
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Connect Socially</h4>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, url: "https://github.com/sairosthedev" },
                    { icon: FaLinkedin, url: "https://linkedin.com/in/macdonald-sairos" },
                    { icon: FaWhatsapp, url: "https://wa.me/263786033933" }
                  ].map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.url}
                      target="_blank"
                      className="p-3 rounded-lg bg-slate-800 hover:bg-white hover:text-slate-900 text-slate-400 transition-all duration-300"
                    >
                      <social.icon className="text-xl" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/30 p-8 rounded-2xl border border-slate-700/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white resize-none transition-all placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-bold transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center text-sm font-medium mt-4">Message sent successfully!</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;