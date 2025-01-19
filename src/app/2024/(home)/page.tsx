import { ReactElement } from 'react';
import type { Metadata } from 'next';
import { LANGUAGE_SETTINGS } from '@/features/language';
import { availableTranslations, Translate } from '@/features/translation';
import {
  HomeTranslation,
  About,
  Access,
  Header,
  Hero,
  Organizers,
  Program,
  Spaces,
  Speakers,
  Sponsors,
  Tickets
} from '@/features/conference/presentation';
import * as accessAndTransport from '@/data/2024/access-and-transport.json';
import * as organizers from '@/data/2024/organizers.json';
import * as slots from '@/data/2024/slots.json';
import * as speakers from '@/data/2024/speakers.json';
import * as sponsors from '@/data/2024/sponsors.json';
import '@/styles/pages/home.scss';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<HomeTranslation>('2024/home')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className='h-100 w-100 position-absolute bg-welcome' />
      <Header brandHref='/2024' editions={[{ year: 2025, isCurrent: true }]} />
      <section id='hero' className='container flex-grow-1 d-flex align-items-center pb-5 text-center' style={{ zIndex: 1 }}>
        <Hero />
      </section>
    </div>
    <main className='overflow-hidden'>
      <section id='organizers' className='bg-light-subtle py-6'>
        <Organizers serializedOrganizers={JSON.stringify(organizers)} />
      </section>
      <section id='about' className='py-6'>
        <About>
          <Spaces />
        </About>
      </section>
      <section id='program' className='bg-light-subtle py-6'>
        <Program serializedSlots={JSON.stringify(slots)} />
      </section>
      <section id='speakers' className='py-6'>
        <Speakers serializedSpeakers={JSON.stringify(speakers)} />
      </section>
      <section id='tickets' className='bg-light py-6'>
        <Tickets ticketsConfiguration={[{ variant: 'primary-subtle' }]} />
      </section>
      <section id='location' className='mt-6'>
        <Access serializedAccessAndTransport={JSON.stringify(accessAndTransport)} />
      </section>
      <section id='sponsors' className='bg-light py-6'>
        <Sponsors serializedSponsors={JSON.stringify(sponsors)} />
      </section>
    </main>
  </>
);

export default Translate(Home, '2024/home');
