'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import clientData from '@/data/clientData.json';

const { testimonials } = clientData;

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-start gap-4 mb-12 justify-center">
          <div className="w-1.5 bg-[#B21F36] rounded-full shrink-0" style={{ height: '3rem' }} />
          <h2
            className="font-bold text-ink uppercase leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw + 0.3rem, 2.25rem)' }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="text-sky fill-sky" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink/75 text-sm leading-relaxed flex-1">"{t.content}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-ink text-sm">{t.name}</p>
                <p className="text-ink/50 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
