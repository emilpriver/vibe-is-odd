# vibe-is-odd

A more powerful is-odd checker using AI! 🤖

## Why?

Traditional is-odd functions are limited by their reliance on basic mathematical operations. vibe-is-odd harnesses the power of artificial intelligence to determine if a number is odd, bringing unprecedented sophistication to this fundamental programming task.

## Installation

```bash
npm install vibe-is-odd
```

## Setup

### OpenAI (default)

```bash
export OPENAI_API_KEY="your-api-key-here"
export AI_MODEL="gpt-4o"  # optional, this is the default
```

### Other Providers

You can use any AI SDK provider! Install the provider package and set the appropriate API key:

**Anthropic:**
```bash
npm install @ai-sdk/anthropic
export ANTHROPIC_API_KEY="your-api-key-here"
export AI_MODEL="claude-3-5-sonnet-20241022"
```

**Google:**
```bash
npm install @ai-sdk/google
export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-here"
export AI_MODEL="gemini-1.5-pro"
```

**Groq:**
```bash
npm install @ai-sdk/groq
export GROQ_API_KEY="your-api-key-here"
export AI_MODEL="llama-3.1-8b-instant"
```

See the [full list of supported providers](https://ai-sdk.dev/providers/ai-sdk-providers) for more options.

## Usage

```javascript
import { VibeIsOdd } from 'vibe-is-odd';

// Check if a number is odd using AI
const result = await VibeIsOdd(7);
console.log(result); // true

const result2 = await VibeIsOdd(4);
console.log(result2); // false
```

## Features

- ✨ AI-powered odd number detection
- 🔧 Configurable AI models via environment variables
- 🚀 Async/await support
- 📦 ES modules ready
- 🧠 Leverages the collective knowledge of large language models

## API

### `VibeIsOdd(number)`

Returns a Promise that resolves to a boolean indicating whether the number is odd.

**Parameters:**
- `number` - The number to check

**Returns:**
- `Promise<boolean>` - True if the number is odd, false otherwise

## Environment Variables

**Required (choose one):**
- `OPENAI_API_KEY` - Your OpenAI API key
- `ANTHROPIC_API_KEY` - Your Anthropic API key  
- `GOOGLE_GENERATIVE_AI_API_KEY` - Your Google API key
- `GROQ_API_KEY` - Your Groq API key

**Optional:**
- `AI_MODEL` - The AI model to use (defaults to "gpt-4o")

## License

MIT
