import clientData from '@/data/clientData.json';

const { business, contact } = clientData;

export const metadata = {
  title: `Privacy Policy | ${business.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">Privacy Policy</h1>
        <div className="w-20 h-1.5 bg-prussian rounded-full mb-8" />
        <p className="text-ink/60 text-sm mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-ink/75 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Information We Collect</h2>
            <p>When you submit a contact form on our website, we collect your name, email address, phone number, and the content of your message. This information is used solely to respond to your enquiry.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">How We Use Your Information</h2>
            <p>We use the information you provide to contact you regarding your plumbing enquiry. We do not sell, trade, or otherwise transfer your personal information to outside parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${contact.email}`} className="text-prussian font-semibold">{contact.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
