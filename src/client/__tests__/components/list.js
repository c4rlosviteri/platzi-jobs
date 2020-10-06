import React from 'react'
import { render, screen } from '@testing-library/react'
import List from '../../components/list'
import { mockStore, results } from '../../mock'
import * as hooks from '../../store'

afterAll(() => hooks.useStore.mockRestore())

afterEach(() => jest.clearAllMocks())

describe('<List />', () => {
  test('should render error', () => {
    mockStore({ isError: true })
    render(<List />)

    expect(screen.getByTestId(/heading-error/i)).toHaveTextContent(
      /There was an error while fetching data. Please try again later…/i,
    )
  })

  test('should render loading components', () => {
    mockStore({ isLoading: true })
    render(<List />)

    expect(screen.getByTestId(/heading-loading/i)).toHaveTextContent(
      /loading…/i,
    )
    expect(screen.getByTestId(/list-skeleton/i)).toBeInTheDocument()
  })

  test('should render no results', () => {
    mockStore({
      filteredResults: [],
      filterResults: () => {},
    })
    render(<List />)

    expect(screen.getByTestId(/filters-results/i)).toBeInTheDocument()
    expect(screen.getByTestId(/heading-results/i)).toHaveTextContent(
      /no available jobs/i,
    )
    expect(screen.queryByTestId(/list-results/i)).toBeNull()
  })

  test('should render results', () => {
    mockStore({
      filteredResults: results,
      filterResults: () => {},
    })
    render(<List />)

    const options = screen.getAllByTestId(/result-card/i)
    expect(screen.getByTestId(/filters-results/i)).toBeInTheDocument()
    expect(screen.getByTestId(/heading-results/i)).toHaveTextContent(
      `Showing ${results.length} available jobs`,
    )
    expect(options).toHaveLength(results.length)
  })
})
