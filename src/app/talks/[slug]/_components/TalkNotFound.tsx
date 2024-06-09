'use client';

import { useTranslation } from '@/app/_translation';
import { TalkDetailsTranslation } from '@/app/talks/_translations';
import Link from 'next/link';
import { ReactElement } from 'react';

export const TalkNotFound = (): ReactElement => {
  const { notFound: i18n }: TalkDetailsTranslation = useTranslation();

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>
        {i18n.message} <Link href={'/talks'}>{i18n.link}</Link>
      </p>
      <Link href={'/talks'}>{i18n.back}</Link>
    </>
  );
};
