import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sphertech.example.com'),
  title: {
    default: 'SpherTech Pvt. Ltd. — Transforming Ideas into Intelligent Digital Solutions',
    template: '%s | SpherTech Pvt. Ltd.',
  },
  description:
    'SpherTech Pvt. Ltd. is a global software company delivering scalable digital products, custom software, AI solutions, cloud, and enterprise applications for clients worldwide.',
  keywords: [
    'software development',
    'IT company',
    'AI solutions',
    'cloud solutions',
    'web development',
    'mobile app development',
    'ERP',
    'CRM',
    'DevOps',
    'SpherTech',
  ],
  authors: [{ name: 'SpherTech Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sphertech.example.com',
    title: 'SpherTech Pvt. Ltd. — Transforming Ideas into Intelligent Digital Solutions',
    description:
      'A global software company delivering scalable digital products, custom software, AI solutions, and enterprise applications.',
    siteName: 'SpherTech Pvt. Ltd.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpherTech Pvt. Ltd.',
    description:
      'Transforming Ideas into Intelligent Digital Solutions.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SpherTech Pvt. Ltd.',
  description:
    'Global software company delivering scalable digital products, custom software, AI solutions, and enterprise applications.',
  url: 'https://sphertech.example.com',
  sameAs: [
    'https://twitter.com/sphertech',
    'https://linkedin.com/company/sphertech',
    'https://github.com/sphertech',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${manrope.variable} font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
