describe('should be able to visit home page and view details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://sup-colorado-api.vercel.app/api/v1/destinations', {
      fixture: "destinations.json"
    }).as("destinations")
    cy.visit('http://localhost:3000')
  })

  it('Should be able to have a homepage with a nav bar', () => {
    cy.get('.nav-container').should('exist')
    cy.get('.paddleLogo').should('exist')
    cy.get('.title').contains('SUP Colorado')
    cy.get('.tagline').contains('...like walking on water, only better')
  });

  it('Should have a search bar with three buttons that filter results', () => {
    cy.get('.btn-container').should('exist')
    .get('.btn-container > :nth-child(1)').contains('Lakes')
    .get('.btn-container > :nth-child(2)').contains('Rivers')
    .get('.btn-container > :nth-child(3)').contains('Clear')
    .get('.btn-container > :nth-child(1)').click()
    .get('.destinations-container').find('.card').should('have.length', 2)
    .get('.btn-container > :nth-child(2)').click()
    .get('.destinations-container').find('.card').should('have.length', 0)
    .get('.btn-container > :nth-child(3)').click()
    .get('.destinations-container').find('.card').should('have.length', 2)
  })

  it('Should have a collection of cards with an image, title, and type text visible', () => { 
    cy.get('.destinations-container > :nth-child(1)').find('.image').should('have.attr', 'src', 'https://summitrentals.com/sites/default/files/styles/full_width_banner_image/public/things-to-do-banner-image/paddleboarding_page.jpg')
    .get('.destinations-container > :nth-child(1)').find('.card-title').contains('Lake Dillon')
    .get('.destinations-container > :nth-child(1)').find('.card-type').contains('Lake')
    .get('.destinations-container > :nth-child(2)').find('.image').should('have.attr', 'src', 'https://a.cdn-hotels.com/gdcs/production37/d874/9001b3ff-0525-4123-baba-6859017830a8.jpg')
    .get('.destinations-container > :nth-child(2)').find('.card-title').contains('Lake Estes')
    .get('.destinations-container > :nth-child(2)').find('.card-type').contains('Lake')
  })

  it('Should be able to use the browser arrow buttons to go between the main page and individual path page', () => { 
    cy.get('.destinations-container > :nth-child(1)').click()
    .visit('http://localhost:3000/1').wait(2000)
    .url().should('eq', 'http://localhost:3000/1')
    cy.go('back').reload()
    .url().should('eq', 'http://localhost:3000/')
    cy.go('forward').reload()
    .url().should('eq', 'http://localhost:3000/1')
  })
})