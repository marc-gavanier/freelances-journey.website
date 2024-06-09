import { talksFromJSON } from '@/app/talks/_transfer';
import speakersJson from '@/data/speakers.json';
import talksJson from '@/data/talks.json';
import { NextResponse } from 'next/server';
import { generateOpenFeedback } from './generateOpenFeedback';

export const GET = async () =>
  NextResponse.json(generateOpenFeedback('Europe/Paris')(talksFromJSON(talksJson), speakersJson), { status: 200 });
