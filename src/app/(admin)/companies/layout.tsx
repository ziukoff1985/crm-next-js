import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

// Головний компонент макету для сторінок в адмінці
// Використовується для обгортання всіх сторінок та компонентів адмінки
export default function Layout({
  children,
  header,
  toolbar,
  modal,
}: LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
