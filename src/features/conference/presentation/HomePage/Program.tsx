'use client';

import { Slot, Slots } from '@/features/conference/domain';
import { useTranslation } from '@/features/translation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import Markdown from 'react-markdown';
import { HomeTranslation } from './home.translation';

export const Program = ({
  serializedSlots,
  disabled = false
}: {
  serializedSlots: string;
  disabled?: boolean;
}): ReactElement => {
  const pathname = usePathname();
  const slots: Slots = Array.from(JSON.parse(serializedSlots));
  const { talks: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='col-lg-5 col-12'>
          <h2>
            <small>{i18n.title}</small> {i18n.subtitle}
          </h2>
          <div className='lead mt-4 mb-5'>
            <Markdown>{i18n.description}</Markdown>
          </div>
          <div className='d-sm-block d-grid'>
            <Link
              className={`btn btn-outline-primary btn-lg ${disabled ? 'disabled' : null}`}
              href={pathname === '/' ? 'talks' : `.${pathname}/talks`}>
              {i18n.callToAction}
            </Link>
          </div>
        </div>
        <div className='col-lg-6 col-12 mt-lg-0 mt-5'>
          {slots.map((slot: Slot, index: number) => (
            <div className='row' key={`${slot.start}-${slot.end}`}>
              <div className='col-auto fw-semibold text-muted me-4 mt-1' style={{ width: '135px' }}>
                {slot.start} - {slot.end}
              </div>
              <div className='col-auto p-0 position-relative'>
                <div
                  className='position-absolute text-bg-primary start-0 translate-middle-x d-flex program-step-index'
                  style={{ width: '29px', height: '29px', marginLeft: '2px' }}>
                  <small className='fw-bolder align-self-center text-center w-100'>{index + 1}</small>
                </div>
              </div>
              <div
                className={
                  'col pb-5 ps-5' + (slots.length - 1 === index ? '' : ' border-start border-primary-subtle border-4')
                }>
                <h3 className='h4'>{i18n.slots[`${slot.start.toString()}-${slot.end.toString()}`]?.title}</h3>
                {i18n.slots[`${slot.start.toString()}-${slot.end.toString()}`]?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
