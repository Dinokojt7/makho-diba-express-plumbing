'use client';

import { motion } from 'framer-motion';

function CollageImg({ src, alt, delay, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`overflow-hidden leading-none ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-center block"
      />
    </motion.div>
  );
}

export default function ImageCollage() {
  return (
    <section className="relative py-[72px] px-4 sm:px-8 lg:px-10 bg-surface font-poppins overflow-hidden">
      {/* Mobile: 2-column grid */}
      <div className="md:hidden max-w-7xl mx-auto rounded-[20px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.09)] grid grid-cols-2 gap-[8px] p-[8px] bg-white">
        <CollageImg src="/collage1.webp" alt="Plumbing work" delay={0}    className="rounded-xl aspect-[4/3]" />
        <CollageImg src="/collage2.webp" alt="Plumbing work" delay={0.06} className="rounded-xl aspect-[4/3]" />
        <CollageImg src="/collage3.webp" alt="Plumbing work" delay={0.12} className="rounded-xl aspect-[4/3]" />
        <CollageImg src="/collage4.webp" alt="Plumbing work" delay={0.19} className="rounded-xl aspect-[4/3]" />
      </div>

      {/* Desktop: 4-column asymmetric grid */}
      <div
        className="hidden md:grid relative max-w-7xl mx-auto rounded-[20px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.09)] bg-white min-h-[480px] max-h-[720px] gap-[10px] p-[10px]"
        style={{
          gridTemplateColumns: '1.3fr 0.65fr 0.65fr 0.85fr',
          gridTemplateRows: '1fr 1fr',
          height: 'calc(100svh / 1.2)',
        }}
      >
        <CollageImg src="/collage1.webp" alt="Plumbing work"        delay={0}    className="row-span-2 rounded-xl" />
        <CollageImg src="/collage2.webp" alt="Geyser installation"  delay={0.06} className="row-span-2 rounded-xl" />
        <CollageImg src="/collage3.webp" alt="Blocked drain fix"    delay={0.12} className="rounded-xl" />
        <CollageImg src="/collage4.webp" alt="Pipe work"            delay={0.19} className="rounded-xl" />
        <CollageImg src="/collage5.webp" alt="Renovation work"      delay={0.16} className="rounded-xl" />
        <CollageImg src="/collage6.webp" alt="Maintenance service"  delay={0.23} className="rounded-xl" />
      </div>
    </section>
  );
}
