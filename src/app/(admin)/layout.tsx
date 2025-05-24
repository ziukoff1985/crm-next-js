import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

// Layout - це оболонка для всіх сторінок у цій папці (admin).
// children — це те, що буде вставлено всередину layout, залежно від того, який маршрут відкрито.
// children - це вміст всіх маршрутів, які знаходяться в папці (admin).
// Коли користувач відкриє /admin/dashboard -> Підключиться layout.tsx із (admin) -> У children вставить вміст dashboard/page.tsx
// Коли користувач відкриє /admin/companies -> Підключиться layout.tsx із (admin) -> У children вставить вміст companies/page.tsx
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
