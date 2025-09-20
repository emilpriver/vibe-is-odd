import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function agent(name, instruction, input) {
  const model = process.env.AI_MODEL || 'gpt-4o-mini';
  const { text } = await generateText({
    model: openai(model),
    prompt: `[${name}] Instruction: ${instruction}\nInput: ${input}`,
  });
  return text.trim();
}

export async function VibeIsOdd(number) {
  // Step 1: Math agent tries to answer
  const mathAnswer = await agent(
    'MathAgent',
    'Decide if the number is odd or even. Say "odd" or "even".',
    number
  );

  // Step 2: Verifier agent double-checks math
  const verifier = await agent(
    'VerifierAgent',
    'Verify if the MathAgent is correct. Respond only "correct" or "incorrect".',
    `Number: ${number}\nMathAgent said: ${mathAnswer}`
  );

  // Step 3: Judge agent gives the final yes/no answer
  const finalDecision = await agent(
    'JudgeAgent',
    'If MathAgent said "odd" and VerifierAgent said "correct", respond "yes". Otherwise, respond "no".',
    `Number: ${number}\nMathAgent: ${mathAnswer}\nVerifier: ${verifier}`
  );

  return finalDecision.toLowerCase().includes('yes');
}
