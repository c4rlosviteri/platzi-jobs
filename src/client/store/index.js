import create from 'zustand'
import { fetchResults } from '../api'
import { filterOrSkip, pipe } from '../utils'

function filterResults(results, { location, sortBy, isRemote }) {
  const sortByFilter = (array) =>
    filterOrSkip(array, sortBy, (arr) =>
      sortBy === 'Oldest'
        ? arr.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        : arr.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    )

  const locationFilter = (array) =>
    filterOrSkip(array, location, (arr) =>
      arr.filter((item) => item.location === location),
    )

  const remoteFilter = (array) =>
    filterOrSkip(array, isRemote, (arr) =>
      arr.filter((item) => item.location.toLowerCase().includes('remote')),
    )

  return pipe(sortByFilter, locationFilter, remoteFilter)([...results])
}

export const useStore = create((set, get) => ({
  // fetch
  results: [],
  isError: false,
  isLoading: false,

  // list results
  filteredResults: [],

  // locations dropdown
  locationsShown: [],

  // action for fetching
  fetchResults: async (params) => {
    try {
      set({ isLoading: true })

      const results = await fetchResults(params)
      const locationsShown = results.reduce((acc, current) => {
        if (!acc.includes(current.location)) acc.push(current.location)
        return acc
      }, [])

      set({ results, filteredResults: results, locationsShown })
    } catch (error) {
      set({ isError: true })
    } finally {
      set({ isLoading: false })
    }
  },

  // action for filtering
  filterResults: ({ location, sortBy, isRemote }) => {
    const results = get().results

    set({
      locationQuery: location,
      sortByQuery: sortBy,
    })

    const filteredResults = filterResults(results, {
      location,
      sortBy,
      isRemote,
    })

    set({ filteredResults })
  },
}))
