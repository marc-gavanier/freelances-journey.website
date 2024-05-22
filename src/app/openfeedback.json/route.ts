import speakersJson from '@/data/speakers.json';
import talksJson from '@/data/talks.json';
import { NextResponse } from 'next/server';
import { talksFromJSON } from '../talks/[slug]/talk';
import { generateOpenFeedback } from './generateOpenFeedback';

export const GET = async () => NextResponse.json(generateOpenFeedback(talksFromJSON(talksJson), speakersJson), { status: 200 });
