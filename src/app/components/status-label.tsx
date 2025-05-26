import React from 'react';
import clsx from 'clsx';

import { CompanyStatus } from '@/lib/api';

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

export default function StatusLabel({ status, disabled }: StatusLabelProps) {
  return (
    <div
      // clsx - для динамічного формування класів -> класи конкатенуються
      // status - статус -> active, notActive, pending, suspended - приходить пропсами з page.tsx
      // disabled - якщо true, то клас 'cursor-not-allowed opacity-50' додається
      className={clsx(
        'inline-flex items-center rounded-3xl px-3.5 py-1 text-sm font-medium',
        status === CompanyStatus.Active && 'bg-green-100 text-green-700',
        status === CompanyStatus.NotActive && 'bg-red-100 text-red-700',
        status === CompanyStatus.Pending && 'bg-orange-100 text-orange-700',
        status === CompanyStatus.Suspended && 'bg-blue-100 text-blue-700',
        { ['cursor-not-allowed opacity-50']: disabled }
      )}
    >
      <div className="mr-2 h-1 w-1 rounded-full bg-current"></div>
      {labelByStatus[status]}
    </div>
  );
}
