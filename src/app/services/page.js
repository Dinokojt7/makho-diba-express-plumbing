import Image from 'next/image';
import Link from 'next/link';
import clientData from '@/data/clientData.json';
import PreFooterCTA from '@/components/PreFooterCTA';

const { services, business } = clientData;

export const metadata = {
  title: `Our Services | ${business.name}`,
  description: 'Expert plumbing services including renovations, geyser installations, blocked drains, CCTV inspections, certificates of compliance, and general maintenance.',
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero banner */}
      <section className="relative overflow-hidden py-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-0">
          <Image src="/hero.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-4 justify-center">
            <div className="w-1.5 bg-sky rounded-full shrink-0" style={{ height: '3rem' }} />
            <h1 className="text-white font-bold uppercase leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw + 0.3rem, 3rem)' }}>
              Our Services
            </h1>
          </div>
          <p className="text-white/75 max-w-2xl leading-relaxed">
            From emergency call-outs to full renovations — we cover every aspect of residential and commercial plumbing across Johannesburg.
          </p>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-surface flex items-center justify-center p-12">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-bold text-ink text-2xl sm:text-3xl mb-4">{service.title}</h2>
                <p className="text-ink/70 leading-relaxed mb-6">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-prussian text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-xl transition-colors hover:bg-[#B21F36]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
