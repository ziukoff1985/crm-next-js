import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

// Головний компонент макету dashboard
// Використовується для обгортання всіх сторінок та компонентів dashboard
// children — це те, що буде вставлено всередину layout, залежно від того, який маршрут відкрито.
// stats, sales, categories, countries, promotions — це компоненти, які будуть відображені на сторінці dashboard
// Коли користувач відкриє /admin/dashboard -> Підключиться layout.tsx із (admin) -> У children вставить вміст dashboard/page.tsx
export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main className="grid grid-cols-12 gap-5 py-10 pr-7 pl-10">
        <div className="col-span-12">{stats}</div>
        <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
        <div className="col-span-6">{promotions}</div>
      </main>
    </div>
  );
}
