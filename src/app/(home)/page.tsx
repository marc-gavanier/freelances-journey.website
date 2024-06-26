import { HomeTranslation } from '@/app/(home)/_translations';
import { LANGUAGE_SETTINGS } from '@/app/_language';
import { availableTranslations, Translate } from '@/app/_translation';
import * as accessAndTransport from '@/data/access-and-transport.json';
import * as organizers from '@/data/organizers.json';
import * as slots from '@/data/slots.json';
import * as speakers from '@/data/speakers.json';
import * as sponsors from '@/data/sponsors.json';
import type { Metadata } from 'next';
import { ReactElement } from 'react';
import './home.scss';
import { About, Access, Header, Hero, Organizers, Program, Spaces, Speakers, Sponsors, Tickets } from './_components';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<HomeTranslation>('home')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className='h-100 w-100 position-absolute bg-welcome' />
      <Header />
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

export default Translate(Home, 'home');
