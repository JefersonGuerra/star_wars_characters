describe('Navigation', () => {
  it('should navigate to the favorites page', () => {
    cy.visit(Cypress.env('host'))
    cy.get('a[href*="favorites"]').click()
    cy.url().should('include', '/favorites')
  })
})

describe('API', () => {
  it('should find name characters in the list', () => {
    cy.visit(Cypress.env('host'))
    cy.request('https://swapi.dev/api/people').then((response) => {
      const data = response.body.results;
      cy.get('.list-characters').each(($el, index) => {
        cy.wrap($el).find('h2').contains(data[index].name)
      })
    })
  })
})

describe('Favorite', () => {
  it('should click button favorite and verify page', () => {
    cy.visit(Cypress.env('host'))
    cy.get('.list-characters').each(($el, index) => {
      cy.wrap($el).find('svg').click()
    })

    cy.visit(`${Cypress.env('host')}/favorites`)

    cy.getAllLocalStorage().then((result) => {
      const local = result[Cypress.env('host')]['favoriteCharacters']
      const data = JSON.parse(local).map(item => item.name)
      cy.get('.list-characters').each(($el, index) => {
        cy.wrap($el).find('h2').contains(data[index])
      })
    })
  })
})