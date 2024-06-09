import { LANGUAGE_SETTINGS } from '@/app/_language';
import { Speaker } from '@/app/_schemas';
import { availableTranslations, Translate } from '@/app/_translation';
import { bySlug } from '@/app/_utils';
import { Talk, talksFromJSON } from '@/app/talks/_transfer';
import { TalkDetailsTranslation } from '@/app/talks/_translations';
import metadataJson from '@/data/metadata.json';
import speakersJson from '@/data/speakers.json';
import talksJson from '@/data/talks.json';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { TalkDetails, TalkNotFound } from './_components';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const i18n: TalkDetailsTranslation =
    await availableTranslations<TalkDetailsTranslation>('talks/[slug]')[LANGUAGE_SETTINGS.defaultLanguage]!();
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(params.slug));

  return {
    title: `${talk?.title} | ${i18n.metadata.titleSuffix}`,
    ...(talk?.description ? { description: talk.description } : {})
  };
};

export const generateStaticParams = (): Talk[] => talksFromJSON(talksJson);

const onlySpeakersOf = (talk?: Talk) => (speaker: Speaker) => talk?.speakers.includes(speaker.name);

const TalkPage = ({ params }: { params: Talk }): ReactElement => {
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(params.slug));
  const speakers: Speaker[] = speakersJson.filter(onlySpeakersOf(talk));

  return (
    <main className='container my-md-5 my-3'>
      {talk ? (
        <TalkDetails
          talk={talk}
          speakers={speakers}
          showLanguage={false}
          showTrack={false}
          openFeedbackEventID={metadataJson.openFeedbackEventID}></TalkDetails>
      ) : (
        <TalkNotFound></TalkNotFound>
      )}
    </main>
  );
};

export default Translate(TalkPage, 'talks/[slug]');
