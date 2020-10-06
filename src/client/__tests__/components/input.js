import React from 'react'
import { axe } from 'jest-axe'
import user from '@testing-library/user-event'
import { render, screen } from '../../mock'
import Input from '../../components/input'

describe('<Input />', () => {
  test('should render an accessible input', async () => {
    const { container } = render(
      <Input id="input" label="Search for your dream programming job" />,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('should update value', () => {
    render(<Input id="input" label="Search for your dream programming job" />, {
      initialState: '',
    })
    const input = screen.getByLabelText(
      /search for your dream programming job/i,
    )

    expect(input).toHaveValue('')
    user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })
})
