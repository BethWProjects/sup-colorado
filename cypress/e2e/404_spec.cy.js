describe('404 handling flows', () => {
  it('should show error when incorrect url is entered', () => {
    cy.intercept('GET', 'https://sup-colorado-api.vercel.app/api/v1/destinations', {
 
    }).as('404')
    cy.visit('http://localhost:3000/loca')
    .get('h1').contains('Page Not Found')
    .get('button').contains('Home').click()
    cy.visit('http://localhost:3000')
  })
})