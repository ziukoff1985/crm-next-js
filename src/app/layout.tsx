import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/app/components/providers';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'CRM App',
  description: 'Manage your companies and promotions with ease',
  icons: {
    icon: '/upload.svg', // або .svg / .png — залежно від формату
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
