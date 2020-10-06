import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { fetchResults as mockFetchResults } from '../../api'
import PopularSearch from '../../components/popular-search'

jest.mock('../../api')

describe('<PopularSearch />', () => {
  test('should render an accessible emoji', async () => {
    const { container } = render(
      <PopularSearch emoji="💅🏻" emojiAlt="Nails" label="Frontend" />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  test('should call the api with the description param', () => {
    const label = 'Frontend'
    mockFetchResults.mockResolvedValue([])
    render(
      <PopularSearch
        emoji="💅🏻"
        emojiAlt="Nails"
        label={label}
        onClick={() => mockFetchResults({ description: label })}
      />,
    )

    const button = screen.getByText(/frontend/i)
    user.click(button)
    expect(mockFetchResults).toHaveBeenCalled()
    expect(mockFetchResults).toHaveBeenCalledWith({ description: label })
  })
})
