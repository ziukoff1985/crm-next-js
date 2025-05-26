'use client';

import React from 'react';
import { use } from 'react'; // ← це нове
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>; // ← важливо!
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params); // ← ось ключ

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
