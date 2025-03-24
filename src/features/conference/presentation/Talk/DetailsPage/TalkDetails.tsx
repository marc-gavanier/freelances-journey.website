'use client';

import { Speaker, Talk } from '@/features/conference/domain';
import { useTranslation } from '@/features/translation';
import { asset, slugify } from '@/features/web';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import Markdown from 'react-markdown';
import { TalkDetailsTranslation } from './talk-details.translation';

const openFeedbackUrl = (openFeedbackEventID: string, { date, title }: Talk) =>
  `https://openfeedback.io/${openFeedbackEventID}/${dayjs(date).format('YYYY-MM-DD')}/${slugify(title)}`;

export const TalkDetails = ({
  talk,
  speakers,
  openFeedbackEventID,
  showLanguage = true,
  showTrack = true
}: {
  talk: Talk;
  speakers: Speaker[];
  openFeedbackEventID?: string;
  showLanguage?: boolean;
  showTrack?: boolean;
}): ReactElement => {
  const { item: i18n }: TalkDetailsTranslation = useTranslation();

  return (
    <>
      <h1>{talk.title}</h1>
      {showLanguage && <p>({talk.language})</p>}
      {speakers.map((speaker: Speaker) => (
        <div key={speaker.name} className='row mt-5 align-items-center'>
          <div className='col-lg-auto col-12'>
            <div
              className='rounded-circle overflow-hidden position-relative bg-body-secondary mx-auto'
              style={{
                aspectRatio: '1/1',
                width: 200
              }}>
              <Image
                src={asset(speaker.picture)}
                alt=''
                width={200}
                height={200}
                className='position-absolute bottom-0 w-100 h-100'></Image>
            </div>
          </div>
          <div className='col'>
            <div className='text-center text-lg-start'>
              <div className='text-primary h3 mt-lg-0 my-3' style={{ fontFamily: 'scr-nsevbd, system-ui' }}>
                {speaker.name}
              </div>
              <div className='mb-3'>{speaker.role}</div>
              {speaker.networks?.linkedin && (
                <a
                  href={speaker.networks.linkedin}
                  title='Linkedin'
                  className='btn btn-secondary p-0'
                  target='_blank'
                  rel='noreferrer'>
                  <span role='img' className='ri-linkedin-fill ri-lg' aria-hidden='true' />
                  <span className='visually-hidden'>LinkedIn (opens a new window)</span>
                </a>
              )}
            </div>
          </div>
          <div className='fs-4 fw-bold col-lg-auto col-12 text-end d-lg-flex flex-lg-column d-inline-flex gap-lg-2 gap-4 justify-content-center flex-wrap mt-lg-0 mt-3'>
            <div>{talk.room}</div>
            <div>
              {dayjs(talk.date).format('HH:mm')} - {talk.duration} {i18n.durationUnit}
            </div>
            {openFeedbackEventID != null && talk.openFeedback !== false && (
              <Link
                className='btn btn-sm btn-primary'
                target='_blank'
                rel='noreferrer'
                href={openFeedbackUrl(openFeedbackEventID, talk)}>
                OpenFeedback
              </Link>
            )}
          </div>
        </div>
      ))}
      {showTrack && <i>{talk.track}</i>}
      <div className='lead mt-5'>
        <Markdown>{talk.description}</Markdown>
      </div>
      <ul className='my-4 p-0 fw-bold d-flex flex-sm-row flex-column gap-2'>
        {talk.tags?.map((tag: string) => (
          <li className='list-unstyled' key={tag}>
            #{tag}&nbsp;
          </li>
        ))}
      </ul>
      {(talk.slidesLink || talk.videoLink) && (
        <ul>
          {talk.slidesLink && (
            <li>
              <a href={talk.slidesLink} target='_blank' rel='noreferrer'>
                {i18n.slides}
              </a>
            </li>
          )}
          {talk.videoLink && (
            <li>
              <a href={talk.videoLink} target='_blank' rel='noreferrer'>
                {i18n.video}
              </a>
            </li>
          )}
        </ul>
      )}
      <div>
        <Link className='btn btn-outline-primary' href={'../talks'}>
          {i18n.back}
        </Link>
      </div>
    </>
  );
};
