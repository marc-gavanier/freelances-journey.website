import { ReactElement } from 'react';
import { Metadata } from 'next';
import { LANGUAGE_SETTINGS } from '@/features/language';
import { availableTranslations, Translate } from '@/features/translation';
import { Talk, talksFromJSON } from '@/features/conference/transfer';
import { TalksList, TalksListTranslation } from '@/features/conference/presentation';
import talksJson from '@/data/2025/talks.json';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<TalksListTranslation>('2025/talks')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const talks: Talk[] = talksFromJSON(talksJson);

const TalksPage = (): ReactElement => (
  <main className='container my-md-5 my-3'>
    <TalksList talks={talks}></TalksList>
  </main>
);

export default Translate(TalksPage, '2025/talks');
