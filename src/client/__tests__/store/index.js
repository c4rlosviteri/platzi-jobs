import { renderHook, act } from '@testing-library/react-hooks'
import * as api from '../../api'
import { useStore } from '../../store'
import { results } from '../../mock'

afterAll(() => api.fetchResults.mockRestore())

afterEach(() => jest.clearAllMocks())

describe('store', () => {
  test('should fetch and filter results', async () => {
    jest.spyOn(api, 'fetchResults').mockImplementation(() => results)

    const { result } = renderHook(useStore)
    expect(result.current.results.length).toEqual(0)
    expect(result.current.filteredResults.length).toEqual(0)
    await act(() => result.current.fetchResults())
    expect(result.current.results.length).toEqual(results.length)
    expect(result.current.filteredResults.length).toEqual(results.length)
    act(() => result.current.filterResults({ location: 'Berlin' }))
    expect(result.current.filteredResults.length).toEqual(1)
    act(() => result.current.filterResults({ isRemote: true }))
    expect(result.current.filteredResults.length).toEqual(0)
    act(() => result.current.filterResults({ sortBy: 'Oldest' }))
    expect(result.current.filteredResults[0]).toMatchObject(results[1])
    act(() => result.current.filterResults({ sortBy: 'Latest' }))
    expect(result.current.filteredResults[0]).toMatchObject(results[0])
  })

  test('should activate loading and error states', async () => {
    jest.spyOn(api, 'fetchResults').mockImplementation(() => {
      throw new Error()
    })

    const { result } = renderHook(useStore)
    expect(result.current.isError).toBeFalsy()
    await act(() => result.current.fetchResults())
    expect(result.current.isError).toBeTruthy()
  })
})
