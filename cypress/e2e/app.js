describe('search', () => {
  it('should add and remove the search chip by using popular search buttons', () => {
    cy.visit('/')
    cy.findByText(/frontend/i, { selector: 'button' }).click()
    cy.findByText(/results for\: frontend/i).should('exist')
    cy.findByTestId(/chip/i).click()
    cy.findByText(/results for\: frontend/i).should('not.exist')
  })

  it('should add and remove the search chip by using the search input', () => {
    cy.visit('/')
    cy.findByLabelText(/search for your dream programming job/i).type('react')
    cy.findByTestId(/search-form/i).submit()
    cy.findByText(/results for\: react/i).should('exist')
    cy.findByTestId(/chip/i).click()
    cy.findByText(/results for\: react/i).should('not.exist')
  })

  it('should get results and filter results', () => {
    cy.request({
      url: 'http://localhost:3000/positions',
      method: 'GET',
    }).then((response) => {
      const { length } = response.body

      cy.visit('/')
      cy.findAllByTestId(/result-card/i).should('have.length', length)
      cy.findByLabelText(/remote only/i).click()
      cy.findAllByText(/location:/i)
        .closest('span')
        .invoke('text')
        .should('match', /remote/i)
    })
  })
})
