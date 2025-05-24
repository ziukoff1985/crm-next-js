'use client';

import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';
import { usePathname, useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter(); // хук для навігації
  const pathname = usePathname(); // хук для отримання поточного шляху

  // handleExitClick - функція для обробки натискання на кнопку "Exit"
  // Вона перенаправляє користувача на головну сторінку
  const handleExitClick = () => {
    router.push('/');
  };
  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-60">
      <div className="flex h-full flex-col overflow-y-auto bg-gray-900">
        <Image
          className="mx-auto mb-11 py-8"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="mx-auto mt-auto flex cursor-pointer items-center gap-2 p-6"
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
