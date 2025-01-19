import { NextResponse } from 'next/server';
import { generateOpenFeedback } from '@/features/openfeedback';
import { talksFromJSON } from '@/features/conference/transfer';
import metadataJson from '@/data/2024/metadata.json';
import speakersJson from '@/data/2024/speakers.json';
import talksJson from '@/data/2024/talks.json';

export const dynamic = 'force-static';

export const GET = async () =>
  NextResponse.json(generateOpenFeedback(metadataJson.timeZone)(talksFromJSON(talksJson), speakersJson), { status: 200 });
