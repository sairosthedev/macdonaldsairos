"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const companyLogos = [
  { name: "Alamait Properties", src: "/images/company%20logo/alamait.png" },
  { name: "BT", src: "/images/company%20logo/belcit.png" },
  { name: "Aura Technologies", src: "/images/company%20logo/aura.png" },
  { name: "Pamusha Portal", src: "/images/company%20logo/pamusha.png" },
  { name: "Call Central", src: "/images/company%20logo/callcentral.png" },
  { name: "Clarity", src: "/images/company%20logo/clarity.png" },
  { name: "Nexus Properties", src: "/images/company%20logo/nexus.png" },
  { name: "UZ SDA", src: "/images/company%20logo/uzsda.png" }
];

const CompanyLogosCarousel = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="py-14 px-4 border-y border-slate-800/50 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Trusted By Partners & Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Companies I Have Built For
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-14 bg-background/95 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-14 bg-background/95 z-10 pointer-events-none" />

          <motion.div
            className="flex gap-5 md:gap-7"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 26,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-40 h-24 md:w-52 md:h-32 bg-slate-900 border border-slate-700/60 rounded-xl p-3 md:p-4"
                title={logo.name}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 208px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosCarousel;
