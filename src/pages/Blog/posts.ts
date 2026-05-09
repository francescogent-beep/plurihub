export interface PostMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
}

export const POSTS: PostMeta[] = [
  {
    slug: 'best-chrome-extension-chatgpt',
    title: 'The Best Chrome Extension for ChatGPT in 2026',
    description:
      'If you use ChatGPT every day, you need a way to manage your conversations. Here\'s the Chrome extension that finally solves it — and it works with Claude, Gemini, and Perplexity too.',
    publishedAt: '2026-05-09',
  },
  {
    slug: 'how-to-organize-ai-conversations',
    title: 'How to Organise Your AI Conversations (Before You Lose Another Good One)',
    description:
      'Most people using AI tools daily are losing their best conversations to disorganised history. Here\'s a system that actually works — and the Chrome extension that makes it effortless.',
    publishedAt: '2026-05-09',
  },
  {
    slug: 'chatgpt-claude-gemini-together',
    title: 'Using ChatGPT, Claude, and Gemini Together Without Losing Your Mind',
    description:
      'Most serious AI users work with multiple models. Here\'s how to build a workflow that uses ChatGPT, Claude, and Gemini for what each does best — without tab chaos or lost conversations.',
    publishedAt: '2026-05-09',
  },
  {
    slug: 'stop-losing-ai-conversations',
    title: 'Why You Keep Losing Your Best AI Conversations (And How to Fix It)',
    description:
      'You\'ve had AI conversations that changed how you think about a problem. Then they\'re gone. Here\'s why this happens and the simple system that stops it.',
    publishedAt: '2026-05-09',
  },
  {
    slug: 'ai-prompt-library-chrome-extension',
    title: 'The Best AI Prompt Library for Chrome (That Works Across Every AI Tool)',
    description:
      'Stop retyping your best prompts into every new AI conversation. Here\'s how a prompt library built into your browser sidebar changes your entire AI workflow.',
    publishedAt: '2026-05-09',
  },
]

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug)
}
