import axios from 'axios'
import qs from 'query-string'

const jobsApi = '/positions'

export async function fetchResults({ description } = {}) {
  const url = qs.stringifyUrl({
    url: jobsApi,
    query: { description },
  })

  const { data: results } = await axios.get(url)

  return results
}
