import * as accessAndTransport from '@/data/2025/access-and-transport.json';
import * as organizers from '@/data/2025/organizers.json';
import * as slots from '@/data/2025/slots.json';
import * as speakers from '@/data/2025/speakers.json';
import * as sponsors from '@/data/2025/sponsors.json';
import {
  About,
  Access,
  Header,
  Hero,
  HomeTranslation,
  Organizers,
  Program,
  Spaces,
  Speakers,
  Sponsors,
  Tickets
} from '@/features/conference/presentation';
import { LANGUAGE_SETTINGS } from '@/features/language';
import { availableTranslations, Translate } from '@/features/translation';
import type { Metadata } from 'next';
import { ReactElement } from 'react';
import '@/styles/pages/home.scss';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<HomeTranslation>('2025/home')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className='h-100 w-100 position-absolute bg-welcome' />
      <Header editions={[{ year: 2024 }]} />
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
        <Program serializedSlots={JSON.stringify(slots)} disabled />
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

export default Translate(Home, '2025/home');
