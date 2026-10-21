// Every fact and link here comes from public sources: the github.com/5h1rU
// profile, the READMEs of the linked repositories, and the npm registry.
// The email address and the Recharge experience were supplied by Felipe
// for this page.

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

export type Experience = {
  company: string
  role: string
  start: { label: string; iso: string }
  end: { label: string; iso: string }
  summary: string
  highlights: string[]
  links: ProjectLink[]
}

export const experience: Experience[] = [
  {
    company: 'Recharge',
    role: 'Senior Software Engineer',
    start: { label: 'Nov 2021', iso: '2021-11' },
    end: { label: 'Mar 2026', iso: '2026-03' },
    summary:
      'Led frontend architecture and built subscription commerce products used across a large base of Shopify storefronts.',
    highlights: [
      'Affinity 2.0, the customer portal Recharge still uses today: I led its frontend architecture and built the experience that lets subscribers manage orders, swap products, adjust delivery schedules, and update payment and shipping details.',
      'Unity Shopify Extension: led architecture and delivery, bringing Recharge’s subscription functionality into Shopify’s native checkout and storefront experiences.',
      'Shipped AI-driven features and guided technical design and reviews across squads, with a focus on performance, reliability, and maintainable frontend architecture.',
    ],
    links: [
      {
        label: 'Customer portal demo',
        href: 'https://getrecharge.com/wp-content/uploads/2026/02/Recharge_Customer_FS_with_SFX.mp4',
      },
      {
        label: 'Affinity customer portal',
        href: 'https://getrecharge.com/customer-portal/',
      },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Nimblers',
    summary:
      'A product that builds the internal apps a team needs from a plain description, using the company’s own data and permissions. Its multi-tenant backend keeps global accounts in D1 and each organization’s data in its own Durable Object SQLite database, structured with Effect-TS clean architecture.',
    stack: [
      'Cloudflare Workers',
      'Durable Objects',
      'D1',
      'Effect-TS',
      'React Server Components',
      'Drizzle',
    ],
    links: [
      { label: 'nimblers.co', href: 'https://nimblers.co' },
      { label: 'Source', href: 'https://github.com/nimblerscode/nimblers' },
    ],
  },
  {
    title: 'WandStore',
    summary:
      'A persona-driven, AI-native e-commerce platform that generates a personalized storefront UI for each shopper with LLMs at the edge. First visits get an instant fallback while generation runs in a pool of Cloudflare Containers; return visits are served from an R2 + KV cache, with Shopify handling catalog and checkout.',
    stack: [
      'Cloudflare Workers',
      'Durable Objects',
      'Containers',
      'R2',
      'KV',
      'Shopify',
    ],
    links: [
      {
        label: 'Architecture docs',
        href: 'https://github.com/wandstore/docs',
      },
    ],
  },
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
