import React from 'react';
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
// Перед використанням id ми очікуємо розгортання params за допомогою await props.params
export default async function Page(props: Props) {
  const { id } = await props.params;

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}
