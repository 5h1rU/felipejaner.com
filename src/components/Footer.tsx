import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {profile.name}
        </p>
        <p className="m-0 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer me"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <span aria-hidden="true"> · </span>
          <a href={profile.x} target="_blank" rel="noopener noreferrer me">
            X<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
