import { ReactElement } from 'react';
import { Metadata } from 'next';
import { LANGUAGE_SETTINGS } from '@/features/language';
import { bySlug } from '@/features/web';
import { Speaker } from '@/features/conference/domain';
import { availableTranslations, Translate } from '@/features/translation';
import { Talk, talksFromJSON } from '@/features/conference/transfer';
import { TalkDetailsTranslation, TalkDetails, TalkNotFound } from '@/features/conference/presentation';
import metadataJson from '@/data/2024/metadata.json';
import speakersJson from '@/data/2024/speakers.json';
import talksJson from '@/data/2024/talks.json';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const slug: string = (await params).slug;
  const i18n: TalkDetailsTranslation =
    await availableTranslations<TalkDetailsTranslation>('2025/talks/[slug]')[LANGUAGE_SETTINGS.defaultLanguage]!();
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(slug));

  return {
    title: `${talk?.title} | ${i18n.metadata.titleSuffix}`,
    ...(talk?.description ? { description: talk.description } : {})
  };
};

export const generateStaticParams = (): { slug: string }[] => talksFromJSON(talksJson).map(({ slug }) => ({ slug }));

const onlySpeakersOf = (talk?: Talk) => (speaker: Speaker) => talk?.speakers.includes(speaker.name);

const TalkPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> => {
  const slug: string = (await params).slug;
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(slug));
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

export default Translate(TalkPage, '2024/talks/[slug]');
