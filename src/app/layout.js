import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/ui/BackToTop';
import NextTopLoader from 'nextjs-toploader';
import clientData from '@/data/clientData.json';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: clientData.metadata.title,
  description: clientData.metadata.description,
  keywords: clientData.metadata.keywords,
  openGraph: {
    title: clientData.metadata.title,
    description: clientData.metadata.description,
    type: 'website',
    images: [{ url: clientData.metadata.ogImage, width: 1200, height: 630, alt: clientData.business.name }],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'icon', url: '/favicon-192.png', sizes: '192x192' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextTopLoader color="#B21F36" height={4} showSpinner={false} />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
