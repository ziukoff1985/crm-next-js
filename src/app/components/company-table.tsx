'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import CompanyRow from '@/app/components/company-row';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CompanyTableProps {}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompanyTable({}: CompanyTableProps) {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });
  return (
    <div className="bg-gray-100 px-10 py-8">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
