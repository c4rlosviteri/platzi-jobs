import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Header from '../../components/header'

describe('<Header />', () => {
  test('should render the app title', () => {
    render(<Header />)
    const title = screen.getByTestId(/app-title/i)

    expect(title).toHaveTextContent(/platzi jobs/i)
  })

  test('should render an accessible emoji', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
