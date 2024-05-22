import { describe, expect, it } from 'vitest';
import { Speakers, Talks } from '../_schemas';
import { generateOpenFeedback } from './generateOpenFeedback';

describe('Generate Open Feedback JSON', () => {
  it('should generate minimal Open Feedback JSON', () => {
    const talks: Talks = [
      {
        speakers: [],
        title: 'Entre industrialisation et artisanat, le métier de développeur',
        description: '',
        duration: 45,
        room: '',
        track: '',
        language: '',
        date: new Date('2024-05-22T16:00:00+02:00')
      }
    ];

    const openFeedback = generateOpenFeedback(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Entre industrialisation et artisanat, le métier de développeur',
          startTime: new Date('2024-05-22T14:00:00.000Z'),
          endTime: new Date('2024-05-22T14:45:00.000Z')
        }
      },
      speakers: {}
    });
  });

  it('should generate Open Feedback JSON with full single session', () => {
    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: [],
        description:
          'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
        date: new Date('2024-05-22T16:00:00+02:00'),
        duration: 45,
        room: 'Hall A',
        track: 'Web Development',
        language: 'English',
        tags: ['Microservices', 'Scalability', 'Distributed Systems']
      }
    ];

    const openFeedback = generateOpenFeedback(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: new Date('2024-05-22T14:00:00.000Z'),
          endTime: new Date('2024-05-22T14:45:00.000Z'),
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems']
        }
      },
      speakers: {}
    });
  });

  it('should generate Open Feedback JSON with an hidden session', () => {
    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: [],
        description:
          'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
        date: new Date('2024-05-22T16:00:00+02:00'),
        duration: 45,
        room: 'Hall A',
        track: 'Web Development',
        language: 'English',
        tags: ['Microservices', 'Scalability', 'Distributed Systems']
      },
      {
        title: 'Hidden',
        speakers: [],
        description: '',
        date: new Date('2024-05-22T16:00:00+02:00'),
        duration: 45,
        room: '',
        track: '',
        language: '',
        openFeedback: false
      }
    ];

    const openFeedback = generateOpenFeedback(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: new Date('2024-05-22T14:00:00.000Z'),
          endTime: new Date('2024-05-22T14:45:00.000Z'),
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems']
        }
      },
      speakers: {}
    });
  });

  it('should generate Open Feedback JSON with a session and his speaker', () => {
    const speakers: Speakers = [
      {
        name: 'Valentin Decker',
        role: "J'aide les créateurs à publier leurs idées en ligne et à en vivre avec un business de Freelance",
        picture: 'images/speakers/Valentin-Decker.webp'
      }
    ];

    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: ['Valentin Decker'],
        description:
          'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
        date: new Date('2024-05-22T16:00:00+02:00'),
        duration: 45,
        room: 'Hall A',
        track: 'Web Development',
        language: 'English',
        tags: ['Microservices', 'Scalability', 'Distributed Systems']
      }
    ];

    const openFeedback = generateOpenFeedback(talks, speakers);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: new Date('2024-05-22T14:00:00.000Z'),
          endTime: new Date('2024-05-22T14:45:00.000Z'),
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems'],
          speakers: ['Valentin Decker']
        }
      },
      speakers: {
        '0': {
          id: '0',
          name: 'Valentin Decker',
          photoUrl: 'http://localhost/images/speakers/Valentin-Decker.webp'
        }
      }
    });
  });

  it('should generate Open Feedback JSON with a session and his full speaker', () => {
    const speakers: Speakers = [
      {
        name: 'Valentin Decker',
        role: "J'aide les créateurs à publier leurs idées en ligne et à en vivre avec un business de Freelance",
        picture: 'images/speakers/Valentin-Decker.webp',
        networks: {
          facebook: 'https://www.facebook.com/valentin-decker',
          instagram: 'https://instagram.com/valentin-decker',
          x: 'https://twitter.com/valentin-decker',
          linkedin: 'https://linkedin.com/valentin-decker'
        }
      }
    ];

    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: ['Valentin Decker'],
        description:
          'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
        date: new Date('2024-05-22T16:00:00+02:00'),
        duration: 45,
        room: 'Hall A',
        track: 'Web Development',
        language: 'English',
        tags: ['Microservices', 'Scalability', 'Distributed Systems']
      }
    ];

    const openFeedback = generateOpenFeedback(talks, speakers);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: new Date('2024-05-22T14:00:00.000Z'),
          endTime: new Date('2024-05-22T14:45:00.000Z'),
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems'],
          speakers: ['Valentin Decker']
        }
      },
      speakers: {
        '0': {
          id: '0',
          name: 'Valentin Decker',
          photoUrl: 'http://localhost/images/speakers/Valentin-Decker.webp',
          socials: [
            {
              name: 'facebook',
              link: 'https://www.facebook.com/valentin-decker'
            },
            {
              name: 'instagram',
              link: 'https://instagram.com/valentin-decker'
            },
            {
              name: 'x',
              link: 'https://twitter.com/valentin-decker'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/valentin-decker'
            }
          ]
        }
      }
    });
  });
});
