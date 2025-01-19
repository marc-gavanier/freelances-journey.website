import { NextResponse } from 'next/server';
import { generateOpenFeedback } from '@/features/openfeedback';
import { talksFromJSON } from '@/features/conference/transfer';
import metadataJson from '@/data/2025/metadata.json';
import speakersJson from '@/data/2025/speakers.json';
import talksJson from '@/data/2025/talks.json';

export const dynamic = 'force-static';

export const GET = async () =>
  NextResponse.json(generateOpenFeedback(metadataJson.timeZone)(talksFromJSON(talksJson), speakersJson), { status: 200 });
