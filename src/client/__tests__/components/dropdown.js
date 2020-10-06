import React from 'react'
import user from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { render, screen } from '../../mock'
import Dropdown from '../../components/dropdown'

describe('<Dropdown />', () => {
  test('should render an accessible select', async () => {
    const { container } = render(
      <Dropdown
        label="Sort by"
        options={[]}
        id="sort-by"
        placeholder="Default"
      />,
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('should render options prop length + default one', () => {
    render(
      <Dropdown
        label="Sort by"
        options={['Latest', 'Oldest']}
        id="sort-by"
        placeholder="Default"
      />,
    )
    const options = screen.getAllByTestId(/dropdown-option/i)

    expect(options).toHaveLength(3)
  })

  test('should change value when selecting a new option', () => {
    render(
      <Dropdown
        label="Sort by"
        options={['Latest']}
        id="sort-by"
        placeholder="Default"
      />,
      { initialState: '' },
    )
    const select = screen.getByLabelText(/sort by/i)
    const newOption = screen.getByText(/latest/i)

    expect(select).toHaveValue('')
    user.selectOptions(select, newOption)
    expect(select).toHaveValue('Latest')
  })
})
