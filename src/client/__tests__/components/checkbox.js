import React from 'react'
import user from '@testing-library/user-event'
import { render, screen } from '../../mock'
import Checkbox from '../../components/checkbox'

describe('<Checkbox />', () => {
  test('should toggle checkbox', () => {
    render(<Checkbox label="Remote only" />, {
      initialState: false,
    })
    const input = screen.getByLabelText(/remote only/i)

    expect(input).not.toBeChecked()
    user.click(input)
    expect(input).toBeChecked()
    user.click(input)
    expect(input).not.toBeChecked()
  })
})
