'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dayjs from 'dayjs';
import { useTranslation } from '@/features/translation';
import { Talk } from '@/features/conference/transfer';
import { TalksListTranslation } from './talks-list.translation';

export const TalksList = ({ talks }: { talks: Talk[] }): ReactElement => {
  const pathname = usePathname();
  const i18n: TalksListTranslation = useTranslation();

  return (
    <>
      <h1>{i18n.title}</h1>
      <div className='list-group my-5'>
        {talks.map((talk: Talk) => (
          <Link key={talk.slug} href={'talks/' + talk.slug} className='p-4 list-group-item list-group-item-action'>
            <div className='row flex-md-row flex-column-reverse'>
              <div className='col'>
                <h2 className='mb-1 h4'>{talk.title}</h2>
                <p className='mb-1 lead text-primary' style={{ fontFamily: 'scr-nsevbd, system-ui' }}>
                  {talk.speakers.join(', ')}
                </p>
                <ul className='p-0 m-0 small fw-bold d-flex flex-sm-row flex-column gap-2'>
                  {talk.tags?.map((tag: string) => (
                    <li className='list-unstyled' key={tag}>
                      #{tag}&nbsp;
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-md-auto col-12 text-nowrap text-md-end text-start d-flex flex-md-column flex-row gap-2 mb-3'>
                {talk.room}
                <span className='fw-bold'>
                  {dayjs(talk.date).format('HH:mm')} - {talk.duration} {i18n.durationUnit}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Link className='btn btn-outline-primary' href={`${pathname}/../#program`}>
          {i18n.back}
        </Link>
      </div>
    </>
  );
};
