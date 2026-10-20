// Every fact and link here comes from public sources: the github.com/5h1rU
// profile, the READMEs of the linked repositories, and the npm registry.
// The email address was supplied by Felipe for this page.

export const profile = {
  name: 'Felipe Janer',
  email: 'yo@felipejaner.com',
  location: 'Cali, Colombia',
  github: 'https://github.com/5h1rU',
  x: 'https://x.com/5h1rU',
  npm: 'https://www.npmjs.com/~5h1ru',
  avatar: 'https://avatars.githubusercontent.com/u/989826?v=4',
}

export type ProjectLink = { label: string; href: string }

export type Project = {
  title: string
  summary: string
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: 'H3 Conversational Video',
    summary:
      'A deployable, Cloudflare-native prototype of an interactive video show. Viewers ask a question by voice, a generated response clip is validated and spliced into the playlist, and playback rejoins the shared episode — falling back to uninterrupted canonical playback on any failure.',
    stack: [
      'Cloudflare Workers',
      'Durable Objects',
      'Queues',
      'R2',
      'D1',
      'Effect',
      'fal.ai',
    ],
    links: [
      {
        label: 'Live prototype',
        href: 'https://h3-conversational-video-prototype.yo-617.workers.dev',
      },
      {
        label: 'Source',
        href: 'https://github.com/5h1rU/h3-conversational-video',
      },
    ],
  },
  {
    title: 'Clara Quotes',
    summary:
      'A three-step insurance quote onboarding flow: a React front end with saved progress and live estimates, backed by a Spring Boot API with PostgreSQL and Kafka. Covered by unit tests, Testcontainers integration tests and Playwright end-to-end tests on desktop and mobile.',
    stack: [
      'React',
      'TypeScript',
      'MUI',
      'Java 17',
      'Spring Boot',
      'PostgreSQL',
      'Kafka',
    ],
    links: [
      {
        label: 'Front end',
        href: 'https://github.com/5h1rU/clara-quotes-frontend',
      },
      {
        label: 'API',
        href: 'https://github.com/5h1rU/clara-quotes-backend',
      },
    ],
  },
  {
    title: 'epayco-tokenizer',
    summary:
      'An MIT-licensed npm package that tokenizes card details in the browser for the ePayco payment gateway, framework-agnostic and usable as a promise.',
    stack: ['JavaScript', 'npm', 'Payments'],
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/epayco-tokenizer',
      },
      {
        label: 'Source',
        href: 'https://github.com/5h1rU/epayco-tokenizer',
      },
    ],
  },
  {
    title: 'felipejaner.com',
    summary:
      'This site: a server-rendered TanStack Start app deployed to Cloudflare Workers.',
    stack: ['TanStack Start', 'React', 'Tailwind CSS', 'Cloudflare Workers'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/5h1rU/felipejaner.com',
      },
    ],
  },
]

export const contacts: ProjectLink[] = [
  { label: `Email — ${profile.email}`, href: `mailto:${profile.email}` },
  { label: 'GitHub — @5h1rU', href: profile.github },
  { label: 'X — @5h1rU', href: profile.x },
  { label: 'npm — 5h1ru', href: profile.npm },
]
