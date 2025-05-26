'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploader({
  square,
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div
      className={clsx(
        'mb-3 flex',
        !square && 'gap-10',
        square && 'flex-col gap-2'
      )}
    >
      {label && <p className="color-gray-900 text-base">{label}</p>}
      <label
        htmlFor={id}
        className={clsx(
          'flex h-40 cursor-pointer flex-col items-center justify-center border border-dashed border-slate-900 bg-white',
          !square && 'w-40 rounded-full',
          square && 'w-full'
        )}
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}
