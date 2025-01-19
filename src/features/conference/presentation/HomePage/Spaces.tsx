'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/features/translation';
import { asset } from '@/features/web';
import { HomeTranslation } from './home.translation';

export const Spaces = (): ReactElement => {
  const { about: i18n }: HomeTranslation = useTranslation();

  return (
    <>
      <h2 className='mb-4'>
        <small>{i18n.spaces.subtitle}</small> {i18n.spaces.title}
      </h2>
      {i18n.spaces.items.map((item, index) => (
        <div key={item.name} className='d-flex align-items-center mb-4'>
          {index % 2 === 0 && (
            <div className='flex-grow-1 me-4'>
              <div className='h4'>{item.name}</div>
              {item.description}
            </div>
          )}
          <Image src={asset(`images/${item.image}`)} alt='' width={150} height={120}></Image>
          {index % 2 !== 0 && (
            <div className='flex-grow-1 text-end ms-4'>
              <div className='h4'>{item.name}</div>
              {item.description}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
