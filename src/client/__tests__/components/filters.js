import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Filters from '../../components/filters'
import { mockStore } from '../../mock'

describe('<Filters />', () => {
  test('should disable location dropdown when checkbox is checked', () => {
    render(<Filters />)

    const locationDropdown = screen.getByLabelText(/location/i)
    const isRemoteCheckbox = screen.getByLabelText(/remote only/i)

    expect(locationDropdown).not.toBeDisabled()
    user.click(isRemoteCheckbox)
    expect(locationDropdown).toBeDisabled()
    user.click(isRemoteCheckbox)
    expect(locationDropdown).not.toBeDisabled()
  })

  test('should be able to change dropdown options', () => {
    mockStore({
      locationsShown: ['Berlin', 'New York'],
      filterResults: () => {},
    })

    render(<Filters />)

    const locationDropdown = screen.getByLabelText(/location/i)

    expect(locationDropdown.value).toBe('')
    user.selectOptions(locationDropdown, 'Berlin')
    expect(locationDropdown.value).toBe('Berlin')
  })
})
