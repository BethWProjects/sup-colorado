describe('Error handling flows', () => {
  it('should show error when paths are not retrieved', () => {
    cy.intercept('GET', 'https://sup-colorado-api.vercel.app/api/v1/destinations', {
      forceNetworkError: true
    }).as('error')
    cy.visit('http://localhost:3000')
    .get('[class="error-message"]').contains('Sorry, no paddle locations available. Please try again another time!')
    
  })
})