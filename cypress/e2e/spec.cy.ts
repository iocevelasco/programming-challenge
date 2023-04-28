describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button').invoke('text').should('equal', 'Clase de prueba gratis')
    cy.get('h2').contains('Activities')
    cy.get('h2').contains('stay hungry')
  })
})
