'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Sponsor } from '@/features/conference/domain';
import { useTranslation } from '@/features/translation';
import { HomeTranslation } from './home.translation';

export const Sponsors = ({ serializedSponsors }: { serializedSponsors: string }): ReactElement => {
  const sponsors: Sponsor[] = Array.from(JSON.parse(serializedSponsors));
  const { sponsors: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center'>
        <h2>
          <small>{i18n.title}</small> {i18n.subtitle}
        </h2>
        <Markdown className='lead my-5'>{i18n.description}</Markdown>
      </div>
      <div className='row gap-5 justify-content-center'>
        {sponsors.map((sponsor: Sponsor) => (
          <div key={sponsor.name} className='col-auto text-center'>
            <Link href={sponsor.url} target='_blank' rel='noreferrer'>
              <Image
                src={sponsor.logo}
                alt={`Visit ${sponsor.name} website (opens in new tab)`}
                width={180}
                height={180}
                title={sponsor.name}
              />
              {sponsor.displayName && <div className='h5 p-3 bg-dark'>{sponsor.name}</div>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
