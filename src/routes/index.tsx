import { createFileRoute } from '@tanstack/react-router'
import { contacts, experience, profile, projects } from '../data/profile'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main id="main" className="page-wrap px-4 pb-8 pt-14">
      <section
        aria-labelledby="intro-title"
        className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14"
      >
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
          <img
            src={profile.avatar}
            alt="Portrait of Felipe Janer"
            width={128}
            height={128}
            className="h-24 w-24 flex-shrink-0 rounded-full border border-[var(--line)] object-cover shadow-[0_12px_30px_rgba(30,90,72,0.16)] sm:h-32 sm:w-32"
          />
          <div>
            <p className="island-kicker mb-3">About me</p>
            <h1
              id="intro-title"
              className="display-title mb-5 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl"
            >
              Hi, I’m Felipe Janer.
            </h1>
            <p className="mb-4 max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)] sm:text-lg sm:leading-8">
              I’m a senior software engineer based in {profile.location}. From
              2021 to 2026 I was at Recharge, leading frontend architecture for
              subscription commerce across Shopify storefronts. I build web
              products end to end — React and TypeScript front ends, typed
              APIs, and backends that run on Cloudflare’s edge or on the JVM.
            </p>
            <p className="m-0 max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)] sm:text-lg sm:leading-8">
              I’ve been on GitHub since 2011.
            </p>
          </div>
        </div>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </section>

      <section aria-labelledby="experience" className="mt-14">
        <p className="island-kicker mb-2">Experience</p>
        <h2
          id="experience"
          className="display-title mb-6 scroll-mt-28 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl"
        >
          Where I’ve worked
        </h2>
        <ol className="m-0 list-none p-0">
          {experience.map((job) => (
            <li
              key={job.company}
              className="island-shell rise-in rounded-2xl p-6 sm:p-8"
            >
              <article>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="m-0 text-xl font-semibold text-[var(--sea-ink)]">
                    {job.role} · {job.company}
                  </h3>
                  <p className="m-0 text-sm font-semibold text-[var(--sea-ink-soft)]">
                    <time dateTime={job.start.iso}>{job.start.label}</time>
                    {' – '}
                    <time dateTime={job.end.iso}>{job.end.label}</time>
                  </p>
                </div>
                <p className="mb-4 max-w-3xl text-base leading-7 text-[var(--sea-ink-soft)]">
                  {job.summary}
                </p>
                <ul className="mb-5 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--sea-ink-soft)]">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="m-0 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {job.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="sr-only">
                        {' '}
                        for {job.company} (opens in a new tab)
                      </span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="work" className="mt-14 scroll-mt-24">
        <p className="island-kicker mb-2">Selected work</p>
        <h2
          id="work"
          className="display-title mb-6 scroll-mt-28 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl"
        >
          Things I’ve shipped
        </h2>
        <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className="island-shell feature-card rise-in flex flex-col rounded-2xl p-6"
              style={{ animationDelay: `${index * 90 + 80}ms` }}
            >
              <article className="flex h-full flex-col">
                <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-[var(--sea-ink-soft)]">
                  {project.summary}
                </p>
                <ul
                  aria-label={`${project.title} stack`}
                  className="mb-5 flex list-none flex-wrap gap-1.5 p-0"
                >
                  {project.stack.map((tech) => (
                    <li key={tech} className="tech-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto mb-0 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="sr-only">
                        {' '}
                        for {project.title} (opens in a new tab)
                      </span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="contact"
        className="island-shell mt-14 rounded-2xl p-6 sm:p-8"
      >
        <p className="island-kicker mb-2">Contact</p>
        <h2
          id="contact"
          className="display-title mb-3 scroll-mt-28 text-3xl font-bold text-[var(--sea-ink)]"
        >
          Let’s talk
        </h2>
        <p className="mb-5 max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)]">
          Email is the most direct way to reach me. You can also find me on
          GitHub and X, where my code and packages live.
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {contacts.map((contact) => (
            <li key={contact.href}>
              {contact.href.startsWith('mailto:') ? (
                <a href={contact.href} className="btn-primary">
                  {contact.label}
                </a>
              ) : (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="btn-secondary"
                >
                  {contact.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
