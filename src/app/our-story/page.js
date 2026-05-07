import Image from 'next/image';
import Link from 'next/link';
import clientData from '@/data/clientData.json';
import PreFooterCTA from '@/components/PreFooterCTA';

const { about, business } = clientData;

export const metadata = {
  title: `Our Story | ${business.name}`,
  description: about.body,
};

export default function OurStoryPage() {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero banner */}
      <section className="bg-prussian py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-4 justify-center">
            <div className="w-1.5 bg-sky rounded-full shrink-0" style={{ height: '3rem' }} />
            <h1 className="text-white font-bold uppercase leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw + 0.3rem, 3rem)' }}>
              Our Story
            </h1>
          </div>
          <p className="text-white/75 max-w-2xl leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.5vw + 0.1rem, 1.1rem)' }}>
            {about.body}
          </p>
        </div>
      </section>

      {/* Mission + numbered points */}
      <section className="py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-bold text-ink text-xl mb-3">{about.heading}</p>
            <p className="text-ink/70 leading-relaxed mb-10">
              Our mission is simple:{' '}
              <span className="font-semibold text-prussian">{about.mission}</span>
            </p>

            <div className="space-y-8">
              {about.points.map((point, i) => (
                <div key={i}>
                  <div className="text-prussian text-3xl font-bold mb-1">{point.number}</div>
                  <h3 className="text-ink font-bold text-lg mb-1.5">{point.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/collage1.webp"
              alt={business.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
