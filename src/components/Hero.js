'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

function HeroForm({ contact, business }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    try {
      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, businessName: business.name }),
      });
      if (!res.ok) throw new Error();
      setStatus({ loading: false, success: true, error: '' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({ loading: false, success: false, error: 'Failed to send. Please call us directly.' });
    }
  };

  const inputCls =
    'w-full px-3.5 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/55 text-sm font-medium focus:outline-none focus:border-sky focus:bg-white/15 transition-all';

  return (
    <form onSubmit={submit} className="flex flex-col gap-2.5">
      <div className="flex gap-2.5">
        <input name="name" value={form.name} onChange={handle} placeholder="Full Name" required className={inputCls} />
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email" required className={inputCls} />
      </div>
      <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="Phone Number" className={inputCls} />
      <textarea name="message" value={form.message} onChange={handle} placeholder="Message" rows={4} required className={`${inputCls} resize-none`} />
      <button
        type="submit"
        disabled={status.loading}
        className="mt-1 bg-sky hover:bg-[#B21F36] text-white font-bold py-3.5 rounded text-sm tracking-widest uppercase transition-colors disabled:opacity-60"
      >
        {status.loading ? 'Sending…' : 'Submit'}
      </button>
      {status.success && <p className="text-green-300 text-xs text-center">Message sent! We'll be in touch shortly.</p>}
      {status.error && <p className="text-red-300 text-xs text-center">{status.error}</p>}
    </form>
  );
}

export default function Hero() {
  const { client } = useTheme();
  const { hero, contact, business } = client;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* White gradient overlay — seamlessly merges with fixed header at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 25%, rgba(255,255,255,0.35) 40%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.07) 50%, rgba(0,0,0,0.16) 75%, rgba(0,0,0,0.22) 100%)',
        }}
      />

      {/* Content — full-width grid, right panel flush to edge */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_min(460px,40%)] items-center">
        {/* Left: text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-10 pt-32 pb-16 lg:pt-0 lg:pb-0"
        >
          {/* Vertical bar + headline */}
          <div className="flex items-start gap-4 mb-5 lg:mt-16">
            <div className="w-1.5 bg-[#B21F36] rounded-full shrink-0 mt-1" style={{ height: 'clamp(3rem, 6vw, 5rem)' }} />
            <h1
              className="font-bold text-ink leading-[1.12] tracking-tight"
              style={{ fontSize: 'clamp(1.85rem, 5vw + 0.4rem, 3.6rem)' }}
            >
              {hero.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="font-extrabold my-6"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw + 0.3rem, 1.6rem)', color: '#B21F36' }}
          >
            {hero.subheadline}
          </p>

          {/* Body */}
          <p className="text-white font-semibold leading-relaxed mb-8 max-w-lg" style={{ fontSize: 'clamp(1rem, 1.8vw + 0.15rem, 1.2rem)' }}>
            {hero.body}
          </p>

          {/* Wide CTA button */}
          <a
            href={hero.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-prussian text-white font-bold py-4 px-8 rounded-lg text-sm tracking-widest uppercase transition-colors hover:bg-[#B21F36] max-w-sm"
          >
            {hero.ctaText}
          </a>

        </motion.div>

        {/* Right: contact form — flush to right edge, super rounded left corners */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="hidden lg:flex flex-col bg-prussian text-white px-8 xl:px-10 py-14 rounded-tl-[3rem] self-start mt-[11rem]"
        >
          <h3 className="text-4xl font-bold tracking-wide uppercase text-center mb-7">Contact Us</h3>

          <div className="flex flex-col gap-2.5 mb-5">
            <a
              href={`tel:${contact.cell.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-white hover:text-white transition-colors"
            >
              <div className="w-9 h-9 rounded bg-white flex items-center justify-center shrink-0 p-2">
                <Image
                  src="/icons/call.webp"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-lg">{contact.cell}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-white hover:text-white transition-colors"
            >
              <div className="w-9 h-9 rounded bg-white flex items-center justify-center shrink-0 p-2">
                <Image
                  src="/icons/mail.webp"
                  alt="Email"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-lg">{contact.email}</span>
            </a>
          </div>

          <HeroForm contact={contact} business={business} />
        </motion.div>
      </div>
    </section>
  );
}
