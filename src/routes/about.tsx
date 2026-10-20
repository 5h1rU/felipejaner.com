import { createFileRoute, redirect } from '@tanstack/react-router'

// The About Me content lives on the home page; keep /about as a stable alias.
export const Route = createFileRoute('/about')({
  beforeLoad: () => {
    throw redirect({ to: '/', statusCode: 301 })
  },
})
