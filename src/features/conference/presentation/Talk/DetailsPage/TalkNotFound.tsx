'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/features/translation';
import { TalkDetailsTranslation } from './talk-details.translation';

export const TalkNotFound = (): ReactElement => {
  const { notFound: i18n }: TalkDetailsTranslation = useTranslation();

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>
        {i18n.message} <Link href={'./talks'}>{i18n.link}</Link>
      </p>
      <Link href={'/talks'}>{i18n.back}</Link>
    </>
  );
};
