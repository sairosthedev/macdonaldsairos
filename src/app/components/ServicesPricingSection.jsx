"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "263787669200";

const packages = [
  {
    id: "starter",
    name: "Starter",
    idealFor: "Basic business websites and early-stage online presence",
    price: "From $500",
    timeline: "1-2 weeks",
    deliverables: [
      "Basic business website (up to 5 pages)",
      "Mobile responsive layout",
      "Contact form setup",
      "Basic SEO setup",
      "Launch and deployment support"
    ],
    selectableServices: [
      "Business website setup (up to 5 pages)",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Landing page / sales funnel"
    ],
    extraNote: "Landing pages / sales funnels: From $150 per page",
    cta: "Start Starter Package",
    highlight: false
  },
  {
    id: "growth",
    name: "Growth",
    idealFor: "Custom websites, e-commerce, and business mobile apps",
    price: "From $900",
    timeline: "3-6 weeks",
    deliverables: [
      "Fully custom UI/UX and modern design",
      "Optimized website performance",
      "E-commerce setup (payments, orders, product upload)",
      "Admin dashboard setup",
      "Business app (basic): From $1,200"
    ],
    selectableServices: [
      "Custom website page build ($100-$150 per page)",
      "Custom UI/UX design",
      "E-commerce setup",
      "Admin dashboard setup",
      "Business mobile app (basic)"
    ],
    extraNote: "Custom website pricing: $100-$150 per page",
    cta: "Choose Growth Package",
    highlight: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    idealFor: "Business systems, portals, and advanced integrations",
    price: "From $1,500",
    timeline: "6-12+ weeks",
    deliverables: [
      "School, property, POS, or marketplace systems",
      "Custom admin dashboards",
      "Scalable backend planning and implementation",
      "System setup and maintenance options",
      "AI and smart integrations (quotation-based)"
    ],
    selectableServices: [
      "School management system",
      "Property management system",
      "POS system",
      "Marketplace system",
      "Custom admin dashboard",
      "AI / smart integration"
    ],
    extraNote: "Quotation-based services available for CCTV, POS, and network setup",
    cta: "Discuss Enterprise Scope",
    highlight: false
  }
];

const ServicesPricingSection = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  const isInCart = (packageId) => cartItems.some((item) => item.id === packageId);

  const addToCart = (pkg) => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === pkg.id)) {
        return prev;
      }

      return [
        ...prev,
        {
          id: pkg.id,
          name: pkg.name,
          price: pkg.price,
          timeline: pkg.timeline,
          availableServices: pkg.selectableServices,
          selectedServices: [pkg.selectableServices[0]]
        }
      ];
    });
  };

  const removeFromCart = (packageId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== packageId));
  };

  const toggleService = (packageId, service) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== packageId) {
          return item;
        }

        const isSelected = item.selectedServices.includes(service);
        const selectedServices = isSelected
          ? item.selectedServices.filter((s) => s !== service)
          : [...item.selectedServices, service];

        return { ...item, selectedServices };
      })
    );
  };

  const checkoutOnWhatsApp = () => {
    if (cartItems.length === 0) {
      return;
    }

    const messageLines = [
      "Hello Miccs Technologies, I would like to place an order.",
      "",
      `Name: ${customerName || "Not provided"}`,
      `Company: ${companyName || "Not provided"}`,
      "",
      "Selected package(s):"
    ];

    cartItems.forEach((item, index) => {
      messageLines.push(`${index + 1}. ${item.name} (${item.price}, ${item.timeline})`);
      messageLines.push(
        `Services: ${item.selectedServices.length > 0 ? item.selectedServices.join(", ") : "No specific services selected yet"}`
      );
    });

    if (projectNotes.trim()) {
      messageLines.push("");
      messageLines.push(`Project notes: ${projectNotes.trim()}`);
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            Services & Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mt-4">
            Clear Packages for Every Stage
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Choose a package based on your current needs. Every package includes clear deliverables and timeline ranges so you can plan with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`rounded-2xl border p-7 flex flex-col h-full ${
                pkg.highlight
                  ? "bg-slate-900 border-primary-500/60 shadow-xl shadow-primary-500/15"
                  : "bg-slate-900/60 border-slate-700/60"
              }`}
            >
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="text-slate-400 text-sm mt-2">{pkg.idealFor}</p>
              </div>

              <div className="mb-6 rounded-lg bg-slate-950/60 border border-slate-800 px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">Starting Price</p>
                <p className="text-2xl font-bold text-primary-300 mt-1">{pkg.price}</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Timeline Range</p>
                <p className="text-secondary-300 font-semibold mt-1">{pkg.timeline}</p>
              </div>

              <div className="mb-8 flex-grow">
                <p className="text-sm uppercase tracking-wider text-slate-500 mb-3">Deliverables</p>
                <ul className="space-y-2.5">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-400 mt-5 border-t border-slate-800 pt-3">
                  {pkg.extraNote}
                </p>
              </div>

              <button
                type="button"
                onClick={() => addToCart(pkg)}
                disabled={isInCart(pkg.id)}
                className={`inline-flex justify-center items-center w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  isInCart(pkg.id)
                    ? "bg-emerald-700/70 text-emerald-100 cursor-not-allowed"
                    : pkg.highlight
                      ? "bg-primary-600 text-white hover:bg-primary-500"
                      : "bg-slate-800 text-slate-100 hover:bg-slate-700"
                }`}
              >
                {isInCart(pkg.id) ? "Added to Cart" : pkg.cta}
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">Service Cart</h3>
            <span className="text-sm text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              {cartCount} package{cartCount === 1 ? "" : "s"} selected
            </span>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-slate-400 mt-4 text-sm">
              Select a package above to add it to cart, then choose the exact services you want before checkout.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="rounded-lg border border-slate-700 bg-slate-950/50 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-xs text-slate-400">{item.price} | {item.timeline}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-rose-300 hover:text-rose-200 border border-rose-400/40 hover:border-rose-300/50 rounded px-3 py-1.5 transition-colors w-fit"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Choose Services</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {item.availableServices.map((service) => (
                        <label key={service} className="flex items-start gap-2 text-sm text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.selectedServices.includes(service)}
                            onChange={() => toggleService(item.id, service)}
                            className="mt-1 accent-cyan-500"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950/70 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Company (optional)</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950/70 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Project Notes (optional)</label>
                <textarea
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  rows={3}
                  placeholder="Any goals, deadlines, or special requirements"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950/70 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-primary-500 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={checkoutOnWhatsApp}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
              >
                Checkout on WhatsApp
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Branding & Design Add-Ons</h3>
          <div className="grid md:grid-cols-2 gap-3 mt-4 text-sm text-slate-300">
            <p>Logo Design: $80-$150</p>
            <p>Company Profile Design: From $200</p>
            <p>Business Flyers: Quotation-based</p>
            <p>Full Branding Package: From $400</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPricingSection;
