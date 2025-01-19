export type Talk = {
  title: string;
  speakers: string[];
  description: string;
  duration: number;
  room: string;
  track: string;
  language: string;
  date: Date;
  slidesLink?: string;
  videoLink?: string;
  tags?: string[];
  openFeedback?: false;
};

export type Talks = Talk[];
