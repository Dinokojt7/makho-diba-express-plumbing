import clientData from '@/data/clientData.json';

const { business, contact } = clientData;

export const metadata = {
  title: `Cookie Policy | ${business.name}`,
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">Cookie Policy</h1>
        <div className="w-20 h-1.5 bg-prussian rounded-full mb-8" />
        <p className="text-ink/60 text-sm mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-ink/75 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website function properly and improve your experience.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">How We Use Cookies</h2>
            <p>This website uses only essential cookies necessary for basic functionality. We do not use tracking, advertising, or analytics cookies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Managing Cookies</h2>
            <p>You can control and/or delete cookies through your browser settings. Disabling cookies may affect the functionality of certain features on this website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Contact</h2>
            <p>Questions about our cookie policy? Contact us at <a href={`mailto:${contact.email}`} className="text-prussian font-semibold">{contact.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
