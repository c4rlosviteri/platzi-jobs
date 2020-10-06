export function stripHtml(HTMLText) {
  return HTMLText.replace(/<[^>]*>?/gm, '')
}

export function formatDate(date) {
  // America/Guayaquil (GMT-5)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Guayaquil',
  }).format(new Date(date))
}

export function filterOrSkip(array, conditional, cb) {
  if (conditional) return cb(array)
  return array
}

export const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x)
