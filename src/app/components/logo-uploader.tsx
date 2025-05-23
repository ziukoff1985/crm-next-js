'use client';

import React from 'react';
import Image from 'next/image';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="mb-3 flex gap-10">
      {label && <p className="color-gray-900 text-base">{label}</p>}
      <label
        htmlFor={id}
        className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border border-dashed border-slate-900 bg-white"
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
