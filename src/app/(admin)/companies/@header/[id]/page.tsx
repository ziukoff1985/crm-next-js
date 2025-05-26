import React from 'react';
import { Company, getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import Header from '@/app/components/header';

// Компонент відрізняється він прикладу в курсі Next.js
// використовуємо асинхронну функцію для отримання параметрів сторінки.
// змінили функцію сторінки на асинхронну (async)
// очікуємо params перед використанням
// params типізується як Promise<{ id: string }>
type Props = {
  params: Promise<{ id: string }>;
};

// Функція Page оголошується як async
// Перед використанням id ми очікуємо розгортання params за допомогою await params
export default async function Page({ params }: Props) {
  const { id } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;

  return <Header>{company?.title}</Header>;
}
