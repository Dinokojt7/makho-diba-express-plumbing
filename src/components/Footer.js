'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clientData from '@/data/clientData.json';

const { business, contact, navigation, services, footer } = clientData;

const FacebookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
  </svg>
);

const socialLinks = [
  { href: contact.social.facebook, Icon: FacebookIcon, label: 'Facebook' },
  { href: contact.social.whatsapp, Icon: WhatsAppIcon, label: 'WhatsApp' },
];

const serviceLinks = services.map((s) => ({ label: s.title, href: `/services#service-${s.id}` }));

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

function ColHeading({ children }) {
  return (
    <p className="mb-4 text-[0.78rem] font-normal text-[#888] tracking-[0.02em]">{children}</p>
  );
}

function LinkList({ links }) {
  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-[9px]">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="text-[0.8rem] text-white hover:text-[#B21F36] transition-colors">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] font-poppins">
      <div className="pt-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_1.2fr] gap-10">

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
          >
            <ColHeading>Our Services</ColHeading>
            <LinkList links={serviceLinks} />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <ColHeading>Quick Links</ColHeading>
            <LinkList links={quickLinks} />
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <ColHeading>Get In Touch</ColHeading>
            <ul className="list-none p-0 m-0 flex flex-col gap-[9px]">
              <li>
                <a href={`tel:${contact.cell.replace(/\s/g, '')}`} className="text-[0.8rem] text-white hover:text-[#B21F36] transition-colors">
                  {contact.cell}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.tel.replace(/\s/g, '')}`} className="text-[0.8rem] text-white hover:text-[#B21F36] transition-colors">
                  {contact.tel}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-[0.8rem] text-white hover:text-[#B21F36] transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="text-[0.8rem] text-white/70">{contact.address}</li>
              <li className="text-[0.8rem] text-white/70">{contact.hours}</li>
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="col-span-2 sm:col-span-1"
          >
            <ColHeading>Follow Us</ColHeading>
            <div className="flex gap-2.5 mb-6">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-white no-underline transition-colors hover:text-[#B21F36] hover:border-[#B21F36] shrink-0"
                >
                  <Icon />
                </a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto h-px bg-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="px-5 sm:px-8">
        <div className="max-w-7xl mx-auto pt-5 pb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/65 text-[0.8rem]">{footer.copyright}</p>
          <div className="relative h-14 w-[180px]">
            <Image
              src={business.logo}
              alt={business.name}
              fill
              className="object-contain object-left brightness-0 invert opacity-60"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-white/10" />
          <div className="pt-3.5 pb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="text-white/40 text-[0.7rem] hover:text-white/65 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
