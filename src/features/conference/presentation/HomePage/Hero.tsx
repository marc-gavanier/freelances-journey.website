'use client';

import { useTranslation } from '@/features/translation';
import { ReactElement } from 'react';
import Markdown from 'react-markdown';
import { HomeTranslation } from './home.translation';

export const Hero = ({ disabled = false }: { disabled?: boolean }): ReactElement => {
  const { hero: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='text-white col-xxl-7 col-lg-6'>
      <h1 className='display-4'>
        <small>{i18n.nextEditionDate}</small> {i18n.title}
      </h1>
      <div className='lead my-5'>
        <Markdown>{i18n.description}</Markdown>
      </div>
      <div className='d-sm-block d-grid'>
        <a
          className={`btn btn-primary btn-lg ${disabled ? 'disabled' : null}`}
          tabIndex={disabled ? -1 : undefined}
          href='#tickets'>
          {i18n.callToAction}
        </a>
      </div>
    </div>
  );
};
