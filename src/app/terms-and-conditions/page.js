import clientData from '@/data/clientData.json';

const { business, contact } = clientData;

export const metadata = {
  title: `Terms & Conditions | ${business.name}`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">Terms & Conditions</h1>
        <div className="w-20 h-1.5 bg-prussian rounded-full mb-8" />
        <p className="text-ink/60 text-sm mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-ink/75 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Services</h2>
            <p>{business.name} provides plumbing services as described on this website. All services are subject to availability and a formal quotation prior to commencement of work.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Quotations</h2>
            <p>All quotations are valid for 30 days from the date of issue. Prices may vary depending on site conditions identified during the job. Any variation will be communicated before proceeding.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Payment</h2>
            <p>Payment is due upon completion of work unless otherwise agreed in writing. We reserve the right to charge interest on overdue accounts.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Liability</h2>
            <p>Our liability is limited to the value of the work performed. We are not liable for pre-existing conditions, concealed defects, or damage resulting from factors outside our control.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Contact</h2>
            <p>Questions? Reach us at <a href={`mailto:${contact.email}`} className="text-prussian font-semibold">{contact.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
