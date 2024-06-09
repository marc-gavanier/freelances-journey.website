import { describe, expect, it } from 'vitest';
import { Speakers, Talks } from '../_schemas';
import { generateOpenFeedback, OpenFeedback } from './generateOpenFeedback';

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

    const openFeedback: OpenFeedback = generateOpenFeedback('Etc/GMT-0')(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Entre industrialisation et artisanat, le métier de développeur',
          startTime: '2024-05-22T14:00:00Z',
          endTime: '2024-05-22T14:45:00Z'
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

    const openFeedback: OpenFeedback = generateOpenFeedback('Etc/GMT-0')(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: '2024-05-22T14:00:00Z',
          endTime: '2024-05-22T14:45:00Z',
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

    const openFeedback: OpenFeedback = generateOpenFeedback('Etc/GMT-0')(talks, []);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: '2024-05-22T14:00:00Z',
          endTime: '2024-05-22T14:45:00Z',
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
        name: 'Marc Gavanier',
        role: "J'aide les créateurs à publier leurs idées en ligne et à en vivre avec un business de Freelance",
        picture: 'images/speakers/Marc-Gavanier.webp'
      }
    ];

    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: ['Marc Gavanier'],
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

    const openFeedback: OpenFeedback = generateOpenFeedback('Etc/GMT-0')(talks, speakers);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: '2024-05-22T14:00:00Z',
          endTime: '2024-05-22T14:45:00Z',
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems'],
          speakers: ['marc-gavanier']
        }
      },
      speakers: {
        'marc-gavanier': {
          id: 'marc-gavanier',
          name: 'Marc Gavanier',
          photoUrl: 'http://localhost/images/speakers/Marc-Gavanier.webp'
        }
      }
    });
  });

  it('should generate Open Feedback JSON with a session and his full speaker', () => {
    const speakers: Speakers = [
      {
        name: 'Marc Gavanier',
        role: "J'aide les créateurs à publier leurs idées en ligne et à en vivre avec un business de Freelance",
        picture: 'images/speakers/Marc-Gavanier.webp',
        networks: {
          facebook: 'https://www.facebook.com/marc-gavanier',
          instagram: 'https://instagram.com/marc-gavanier',
          x: 'https://twitter.com/marc-gavanier',
          linkedin: 'https://linkedin.com/marc-gavanier'
        }
      }
    ];

    const talks: Talks = [
      {
        title: 'Building Scalable Web Applications with Microservices Architecture',
        speakers: ['Marc Gavanier'],
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

    const openFeedback: OpenFeedback = generateOpenFeedback('Etc/GMT-0')(talks, speakers);

    expect(openFeedback).toStrictEqual({
      sessions: {
        '0': {
          id: '0',
          title: 'Building Scalable Web Applications with Microservices Architecture',
          startTime: '2024-05-22T14:00:00Z',
          endTime: '2024-05-22T14:45:00Z',
          trackTitle: 'Web Development',
          tags: ['Microservices', 'Scalability', 'Distributed Systems'],
          speakers: ['marc-gavanier']
        }
      },
      speakers: {
        'marc-gavanier': {
          id: 'marc-gavanier',
          name: 'Marc Gavanier',
          photoUrl: 'http://localhost/images/speakers/Marc-Gavanier.webp',
          socials: [
            {
              name: 'facebook',
              link: 'https://www.facebook.com/marc-gavanier'
            },
            {
              name: 'instagram',
              link: 'https://instagram.com/marc-gavanier'
            },
            {
              name: 'x',
              link: 'https://twitter.com/marc-gavanier'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/marc-gavanier'
            }
          ]
        }
      }
    });
  });
});
