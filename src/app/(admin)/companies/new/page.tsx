'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="px-10 py-6">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
