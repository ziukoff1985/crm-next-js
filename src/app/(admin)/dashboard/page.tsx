import React from 'react';
import Header from '@/app/components/header';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

// Головна сторінка для перегляду dashboard
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
