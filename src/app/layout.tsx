import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Body without dynamic className to avoid hydration issues */}
      <body>{children}</body>
    </html>
  );
}
