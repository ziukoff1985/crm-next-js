import React from 'react';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyInfo from '@/app/components/company-info';
import CompanyPromotions from '@/app/components/company-promotions';

// Компонент відрізняється він прикладу в курсі Next.js
// використовуємо асинхронну функцію для отримання параметрів сторінки.
// змінили функцію сторінки на асинхронну (async)
// очікуємо params перед використанням
// params типізується як Promise<{ id: string }>
type Props = {
  params: Promise<{ id: string }>;
};

// Функція Page оголошується як async
// Перед використанням id ми очікуємо розгортання params за допомогою await props.params
export default async function Page(props: Props) {
  const { id } = await props.params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;
  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="grid grid-cols-12 gap-5 px-10 py-6">
        <div className="col-span-3">
          <CompanyInfo companyId={id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
