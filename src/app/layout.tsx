import React from 'react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Body without dynamic className to avoid hydration issues */}
      <body>
        <header>My CRM Header</header>
        {children}
        <footer>My CRM Footer</footer>
      </body>
    </html>
  );
}
