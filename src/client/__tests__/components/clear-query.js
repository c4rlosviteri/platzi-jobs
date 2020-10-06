import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import ClearQuery from '../../components/clear-query'

describe('<ClearQuery />', () => {
  test('should render an accessible chip', async () => {
    const { container } = render(<ClearQuery query="Python" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
