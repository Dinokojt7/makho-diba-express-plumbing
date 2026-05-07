'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import clientData from '@/data/clientData.json';

const { whyChooseUs, targetAudience } = clientData;

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Why Choose Us */}
        <div className="flex items-start gap-4 mb-12 justify-center">
          <div className="w-1.5 bg-[#B21F36] rounded-full shrink-0" style={{ height: '3rem' }} />
          <h2
            className="font-bold text-ink uppercase leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw + 0.3rem, 2.25rem)' }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={22} className="text-prussian shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-ink text-base mb-1">{item.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="bg-prussian rounded-2xl p-8 lg:p-12">
          <h3 className="text-white font-bold text-xl mb-6">Who We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {targetAudience.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-sky shrink-0" />
                <span className="text-white/90 text-sm font-medium">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
