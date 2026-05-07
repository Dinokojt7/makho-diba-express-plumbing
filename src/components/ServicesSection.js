'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clientData from '@/data/clientData.json';

const { services } = clientData;

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section heading with left accent bar */}
        <div className="flex items-start gap-4 mb-14 justify-center">
          <div className="w-1.5 bg-[#B21F36] rounded-full shrink-0 mt-1" style={{ height: '3.5rem' }} />
          <h2
            className="font-bold text-ink uppercase leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw + 0.4rem, 2.75rem)' }}
          >
            Our Core Services
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5"
            >
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg mb-2 leading-tight">{service.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <Link
            href="/services"
            className="bg-prussian text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-colors hover:bg-[#B21F36]"
          >
            All Plumber Services
          </Link>
        </div>
      </div>
    </section>
  );
}
