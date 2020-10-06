import axios from 'axios'
import { fetchResults } from '../../api'
import { results } from '../../mock'

describe('api', () => {
  test('should return results', async () => {
    jest.spyOn(axios, 'get').mockImplementation(() => ({ data: results }))

    const apiResponse = await fetchResults()
    expect(apiResponse.length).toEqual(results.length)
  })
})
