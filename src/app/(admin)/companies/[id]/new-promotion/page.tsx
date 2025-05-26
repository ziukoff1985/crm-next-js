'use client';

import React from 'react';
import { use } from 'react'; // ← це нове
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>; // ← важливо!
}

export default function Page({ params }: PageProps) {
  const { id } = use(params); // ← ось ключ
  return (
    <div className="px-10 py-6">
      <PromotionForm companyId={id} />
    </div>
  );
}
