import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { getSummaryCountries } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCountries();

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end gap-2 px-5 pb-5">
        <div>
          {data.map(({ countryId, countryTitle, count }) => (
            <p
              key={countryId}
              className={clsx(
                'text-sm font-medium text-gray-900',
                'before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-purple-200 before:align-middle'
              )}
            >{`${countryTitle} - ${count}`}</p>
          ))}
        </div>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}
