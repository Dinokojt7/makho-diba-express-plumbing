'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import clientData from '@/data/clientData.json';

const { about } = clientData;

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/about-us.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-tl-[5rem] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: text */}
            <div className="px-8 sm:px-12 lg:px-14 py-12 lg:py-16">
              {/* Heading with accent bar */}
              <div className="flex items-start gap-4 mb-7">
                <div className="w-1.5 bg-[#B21F36] rounded-full shrink-0" style={{ height: '3rem' }} />
                <h2
                  className="font-bold text-ink uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3vw + 0.4rem, 2.5rem)' }}
                >
                  About Us
                </h2>
              </div>

              <p className="font-bold text-ink text-lg mb-3">{about.heading}</p>
              <p className="text-ink/70 leading-relaxed mb-10">{about.body}</p>

              {/* Numbered points */}
              <div className="space-y-7">
                {about.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="text-prussian text-2xl font-bold opacity-80 mb-1">
                      {point.number}
                    </div>
                    <h3 className="text-ink font-bold text-base leading-tight mb-1">
                      {point.title}
                    </h3>
                    <p className="text-ink/65 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/collage7.webp"
                alt="Makho & Diba plumbing team at work"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
