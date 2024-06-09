import { LANGUAGE_SETTINGS } from '@/app/_language';
import { availableTranslations, Translate } from '@/app/_translation';
import talksJson from '@/data/talks.json';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { TalksList } from './_components';
import { Talk, talksFromJSON } from './_transfer';
import { TalksListTranslation } from './_translations';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<TalksListTranslation>('talks')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const talks: Talk[] = talksFromJSON(talksJson);

const TalksPage = (): ReactElement => (
  <main className='container my-md-5 my-3'>
    <TalksList talks={talks}></TalksList>
  </main>
);

export default Translate(TalksPage, 'talks');
