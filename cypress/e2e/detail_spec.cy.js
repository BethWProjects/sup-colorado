describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://sup-colorado-api.vercel.app/api/v1/destinations', {
      fixture: "detailPage.json"
    }).as("detailPage")
    cy.visit('http://localhost:3000/1')
  })

  it('Should be able to have a detail page with a nav bar', () => {
    cy.get('.nav-container').should('exist')
    cy.get('.paddleLogo').should('exist')
    cy.get('.title').contains('SUP Colorado')
    cy.get('.tagline').contains('...like walking on water, only better')
  });

  it('Should show a detail page for a hike or park', () => { 
    cy.get('.dest-details-container').find('.details-home-button').contains('Home')
    .get('.details-title').contains('Lake Dillon')
    .get('.details-location').contains('Location - Dillon, CO')
    .get('.details-drive').contains('Drive time from Denver - 1.25 hours')
    .get('.details-cost').contains('Cost - Free')
    .get('.details-type').contains('Lake/River? - Lake')
    .get('.details-pets').contains('Pets Allowed? - Yes')
    .get('.details-boats').contains('Motorboats Allowed? - Yes')
    .get('.details-overview').contains('This Summit County hotspot is home to several annual regattas, which are a delight to watch. If you love to be in the center of the action, this is your spot. Dillon Reservoir is surrounded by several nearby campgrounds, so if you’re into camping, this is a great spot to visit. The reservoir is strict about safety - one Coast Guard approved PFD for each person must be on board your SUP at all times - so be prepared and stay safe!')
    cy.get('.image-container').find('.details-image').should('have.attr', 'src', 'https://summitrentals.com/sites/default/files/styles/full_width_banner_image/public/things-to-do-banner-image/paddleboarding_page.jpg')
    
  })

  it('user should be able to return to homepage, by clicking Home', () => {
    cy.get('.dest-details-container').find('.details-home-button').contains('Home').click()
    .visit('http://localhost:3000')
  })
  })
