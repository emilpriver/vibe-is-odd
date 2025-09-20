import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function VibeIsOdd(number) {
  const model = process.env.AI_MODEL || 'gpt-4o';

  const { text } = await generateText({
    model: openai(model),
    prompt: `Is the number ${number} odd? Answer only with "yes" or "no".`,
  });

  return text.toLowerCase().includes('yes');
}
