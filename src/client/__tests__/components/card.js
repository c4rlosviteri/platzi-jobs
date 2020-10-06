import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Card from '../../components/card'

const description =
  'You will be working with a cross-functional team focused on the development of micro-frontends for new features and updating legacy code , working closely with PMs, Designers, Backend Developers, QAs and Data Scientists with a clear understanding of why you are building this features, the impact they will have and how they will be integrated with the rest of the platform, specially the backend. We expect you to propose ideas to the Product Designers and be able to engage in productive discussions to help shape their proposals.'

const incompleteDescription = description.substr(0, 240)

describe('<Card />', () => {
  test('should toggle description text', () => {
    const scrollToSpy = jest.fn()
    global.scrollTo = scrollToSpy
    render(
      <Card
        company="Platzi"
        companyUrl="https://platzi.com"
        datePosted="Wed Sep 30 22:51:34 UTC 2020"
        description={description}
        howToApply="Apply at <a href='https://www.getonbrd.com/jobs/frontend-developer-platzi-remote/applications/new'>getonbrd</a>"
        id="platzi"
        location="Remote"
        title="Front-end Developer"
      />,
    )
    const descriptionText = screen.getByTestId(/description/i)
    const seeMoreButton = screen.getByRole('button')

    expect(descriptionText).toHaveTextContent(incompleteDescription)
    expect(seeMoreButton).toHaveTextContent(/see more/i)
    user.click(seeMoreButton)
    expect(descriptionText).toHaveTextContent(description)
    expect(seeMoreButton).toHaveTextContent(/see less/i)
    user.click(seeMoreButton)
    expect(descriptionText).toHaveTextContent(incompleteDescription)
    expect(scrollToSpy).toHaveBeenCalled()
  })
})
