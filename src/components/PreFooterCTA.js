import clientData from '@/data/clientData.json';

const { contact } = clientData;

export default function PreFooterCTA() {
  return (
    <section className="bg-prussian py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <h2
          className="text-white font-bold mb-3 leading-tight"
          style={{ fontSize: 'clamp(1.5rem, 3vw + 0.3rem, 2.2rem)' }}
        >
          Ready to experience the difference?
        </h2>
        <p className="text-white/75 mb-10 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.5vw + 0.1rem, 1.05rem)' }}>
          Contact us today to schedule an appointment or request emergency assistance. Let us handle all your plumbing needs with professionalism, reliability, and care.
        </p>

        <div className="flex justify-center">
          <a
            href={`tel:${contact.cell.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center bg-white text-prussian font-extrabold rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90"
            style={{ fontSize: 'clamp(1.4rem, 3vw + 0.4rem, 2rem)', padding: '1.6rem 5rem' }}
          >
            {contact.cell.replace('+27 ', '0')}
          </a>
        </div>
      </div>
    </section>
  );
}
