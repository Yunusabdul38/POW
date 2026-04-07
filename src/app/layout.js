import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Yunus Abdulmajid | Frontend & Mobile Developer',
  description: 'Helping you turn ideas into seamless mobile and web apps with a focus on user experience and performance.',
  keywords: ['Yunus Abdulmajid', 'Frontend Developer', 'Mobile Developer', 'React Developer', 'Next.js', 'Portfolio', 'UX/UI Developer'],
  authors: [{ name: 'Yunus Abdulmajid' }],
  openGraph: {
    title: 'Yunus Abdulmajid | Portfolio',
    description: 'Bespoke mobile and web applications with a focus on smooth user experiences.',
    url: 'https://yourportfolio.com',
    siteName: 'Yunus Abdulmajid Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yunus Abdulmajid | Portfolio',
    description: 'Expert Frontend & Mobile Developer specializing in seamless product experiences.',
    creator: '@yunusabdul38',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div id="grain" />
        {children}
      </body>
    </html>
  );
}
