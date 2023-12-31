import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AOSInit } from './aos';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skilline',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
