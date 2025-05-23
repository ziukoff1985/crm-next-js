import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}
export interface StatusLabelProps {
  children: React.ReactNode;
  status?: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <div
      // clsx - для динамічного формування класів -> класи конкатенуються
      // status - статус -> active, notActive, pending, suspended - приходить пропсами з page.tsx
      // disabled - якщо true, то клас 'cursor-not-allowed opacity-50' додається
      className={clsx(
        'inline-flex items-center rounded-3xl px-3.5 py-1 text-sm font-medium',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-red-700',
        status === Status.Pending && 'bg-orange-100 text-orange-700',
        status === Status.Suspended && 'bg-blue-100 text-blue-700',
        { ['cursor-not-allowed opacity-50']: disabled }
      )}
    >
      <div className="mr-2 h-1 w-1 rounded-full bg-current"></div>
      {children}
    </div>
  );
}
