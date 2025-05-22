import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}
export interface StatusLabelProps {
  children: React.ReactNode;
  status?: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <div
      className={`inline-flex items-center rounded-3xl px-3.5 py-1 text-sm font-medium ${
        (status === Status.Active && 'bg-green-100 text-green-700') ||
        (status === Status.NotActive && 'bg-red-100 text-red-700') ||
        (status === Status.Pending && 'bg-orange-100 text-orange-700') ||
        (status === Status.Suspended && 'bg-blue-100 text-blue-700') ||
        ''
      }`}
    >
      <div className="mr-2 h-1 w-1 rounded-full bg-current"></div>
      {children}
    </div>
  );
}
