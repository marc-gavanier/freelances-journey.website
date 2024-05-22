import { Speaker, Speakers, Talk, Talks } from '../_schemas';
import { slugify, urlFromEnv } from '../_utils';

type OpenFeedbackSession = {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
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

const toOpenFeedbackSessions = (sessions: Record<string, OpenFeedbackSession>, talk: Talk, index: number) => ({
  ...sessions,
  [index]: {
    id: `${index}`,
    title: talk.title,
    startTime: talk.date,
    endTime: new Date(talk.date.getTime() + talk.duration * 60 * 1000),
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

export const generateOpenFeedback = (talks: Talks, speakers: Speakers): OpenFeedback => ({
  sessions: talks.filter(onlyAllowedFeedbacks).reduce(toOpenFeedbackSessions, {}),
  speakers: speakers.reduce(toOpenFeedbackSpeakers, {})
});
