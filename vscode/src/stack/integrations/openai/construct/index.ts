import { Pinecone } from '@pinecone-database/pinecone';
import OpenAI from 'openai';
import { BoilerplateMetadata } from '../../lib/types';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
  environment: process.env.PINECONE_ENVIRONMENT as string,
});

const defaultHeaders = process.env.HELICONE_API_KEY ? {
  'Helicone-Auth': `Bearer ${process.env.HELICONE_API_KEY}`,
  'Helicone-Cache-Enabled': 'true',
} : {};

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://oai.hconeai.com/v1',
  defaultHeaders: defaultHeaders,
});

export default async function constructOpenAI(
  briefSkeleton: string,
  functionAndOutputSkeleton: string,
  brief: string,
  exampleBoilerplate: BoilerplateMetadata | null | BoilerplateMetadata[],
  startingBoilerplate: string
): Promise<string> {
  const index = pinecone.index('general');

  // there needs to be a step in here which generates using openai and boilerplate

  return startingBoilerplate;
}
