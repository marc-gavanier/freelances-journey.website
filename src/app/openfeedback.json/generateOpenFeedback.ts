import { Speaker, Speakers, Talk, Talks } from '@/app/_schemas';
import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { slugify, urlFromEnv } from '../_utils';

dayjs.extend(utc);
dayjs.extend(tz);

type OpenFeedbackSession = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  track?: string;
  tags?: string[];
  speakers?: string[];
};

type OpenFeedbackSpeaker = {
  id: string;
  name: string;
  photoUrl: string;
  socials?: { name: string; link: string }[];
};

export type OpenFeedback = {
  sessions: Record<string, OpenFeedbackSession>;
  speakers: Record<string, OpenFeedbackSpeaker>;
};

const onlyAllowedFeedbacks = (talk: Talk) => talk.openFeedback !== false;

const toOpenFeedbackSessions = (timeZone: string) => (sessions: Record<string, OpenFeedbackSession>, talk: Talk) => ({
  ...sessions,
  [slugify(talk.title)]: {
    id: slugify(talk.title),
    title: talk.title,
    startTime: dayjs.tz(talk.date, timeZone).format(),
    endTime: dayjs.tz(new Date(talk.date.getTime() + talk.duration * 60 * 1000), timeZone).format(),
    ...(talk.speakers.length > 0 ? { speakers: talk.speakers.map(slugify) } : {}),
    ...(talk.track ? { trackTitle: talk.track } : {}),
    ...(talk.tags ? { tags: talk.tags } : {})
  }
});

const toOpenFeedbackSpeakers = (speakers: Record<string, OpenFeedbackSpeaker>, speaker: Speaker) => ({
  ...speakers,
  [slugify(speaker.name)]: {
    id: slugify(speaker.name),
    name: speaker.name,
    photoUrl: `${urlFromEnv()}/${speaker.picture}`,
    ...(speaker.networks
      ? { socials: Object.entries(speaker.networks).map(([key, vaue]: [string, string]) => ({ name: key, link: vaue })) }
      : {})
  }
});

export const generateOpenFeedback =
  (timeZone: string) =>
  (talks: Talks, speakers: Speakers): OpenFeedback => ({
    sessions: talks.filter(onlyAllowedFeedbacks).reduce(toOpenFeedbackSessions(timeZone), {}),
    speakers: speakers.reduce(toOpenFeedbackSpeakers, {})
  });
