import { Speaker, Speakers, Talk, Talks } from '../_schemas';
import { urlFromEnv } from '../_utils';

type OpenFeedbackSession = {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  track?: string;
  tags?: string[];
  speakers?: string[];
};

type OpenFeedbackSpeakers = {
  id: string;
  name: string;
  photoUrl: string;
  socials?: { name: string; link: string }[];
};

const onlyAllowedFeedbacks = (talk: Talk) => talk.openFeedback !== false;

const toOpenFeedbackSessions = (sessions: Record<string, OpenFeedbackSession>, talk: Talk, index: number) => ({
  ...sessions,
  [index]: {
    id: `${index}`,
    title: talk.title,
    startTime: talk.date,
    endTime: new Date(talk.date.getTime() + talk.duration * 60 * 1000),
    ...(talk.speakers.length > 0 ? { speakers: talk.speakers } : {}),
    ...(talk.track ? { trackTitle: talk.track } : {}),
    ...(talk.tags ? { tags: talk.tags } : {})
  }
});

const toOpenFeedbackSpeakers = (speakers: Record<string, OpenFeedbackSpeakers>, speaker: Speaker, index: number) => ({
  ...speakers,
  [index]: {
    id: `${index}`,
    name: speaker.name,
    photoUrl: `${urlFromEnv()}/${speaker.picture}`,
    ...(speaker.networks
      ? { socials: Object.entries(speaker.networks).map(([key, vaue]: [string, string]) => ({ name: key, link: vaue })) }
      : {})
  }
});

export const generateOpenFeedback = (talks: Talks, speakers: Speakers) => ({
  sessions: talks.filter(onlyAllowedFeedbacks).reduce(toOpenFeedbackSessions, {}),
  speakers: speakers.reduce(toOpenFeedbackSpeakers, {})
});
