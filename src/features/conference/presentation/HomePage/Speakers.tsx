'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import { Speaker } from '@/features/conference/domain';
import { useTranslation } from '@/features/translation';
import { asset } from '@/features/web';
import { HomeTranslation } from './home.translation';

export const Speakers = ({
  serializedSpeakers,
  blur = false
}: {
  serializedSpeakers: string;
  blur?: boolean;
}): ReactElement => {
  const speakers: Speaker[] = Array.from(JSON.parse(serializedSpeakers));
  const { speakers: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center'>
          <h2>
            <small>{i18n.title}</small> {i18n.subtitle}
          </h2>
          <Markdown className='lead my-4'>{i18n.description}</Markdown>
        </div>
      </div>
      <div className='row py-5 g-xl-5 text-center justify-content-center'>
        {speakers.map((speaker: Speaker) => (
          <div key={speaker.name} className='col-md-3 col-6'>
            <div
              className='rounded-circle m-auto overflow-hidden position-relative bg-speaker'
              style={{
                width: '80%',
                aspectRatio: '1/1'
              }}>
              <Image
                src={asset(speaker.picture)}
                alt=''
                width={200}
                height={200}
                className={`position-absolute translate-middle-x bottom-0 w-100 h-100 ${blur ? 'img-blur' : ''}`}></Image>
            </div>
            {speaker.networks && (
              <div className='btn-group mt-n4'>
                {speaker.networks.facebook && (
                  <a href={speaker.networks.facebook} className='btn btn-light p-2' target='_blank' rel='noreferrer'>
                    <span role='img' className='text-secondary opacity-50 ri-facebook-fill' aria-hidden='true' />
                    <span className='visually-hidden'>Facebook (opens a new window)</span>
                  </a>
                )}
                {speaker.networks.instagram && (
                  <a href={speaker.networks.instagram} className='btn btn-light p-2' target='_blank' rel='noreferrer'>
                    <span role='img' className='text-secondary opacity-50 ri-instagram-fill' aria-hidden='true' />
                    <span className='visually-hidden'>Instagram (opens a new window)</span>
                  </a>
                )}
                {speaker.networks.x && (
                  <a href={speaker.networks.x} className='btn btn-light p-2' target='_blank' rel='noreferrer'>
                    <span role='img' className='text-secondary opacity-50 ri-twitter-x-line' aria-hidden='true' />
                    <span className='visually-hidden'>X (opens a new window)</span>
                  </a>
                )}
                {speaker.networks.linkedin && (
                  <a href={speaker.networks.linkedin} className='btn btn-light p-2' target='_blank' rel='noreferrer'>
                    <span role='img' className='text-secondary opacity-50 ri-linkedin-fill' aria-hidden='true' />
                    <span className='visually-hidden'>LinkedIn (opens a new window)</span>
                  </a>
                )}
              </div>
            )}
            <h3 className={`h5 ${speaker.networks ? 'mt-4' : 'mt-5'}`}>{speaker.name}</h3>
            <p>{speaker.role}</p>
          </div>
        ))}
      </div>
      {/*<div className='d-sm-block d-grid py-5 text-center'>*/}
      {/*  <Link className='btn btn-outline-light btn-lg' href={'speakers'}>*/}
      {/*    {i18n.callToAction}*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
};
