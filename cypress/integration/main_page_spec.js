describe('Main', () => {
  it('As a user, I should be able to visit the page and see text', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('h2[class="explore-all-parks"]')
    .should('contain', 'Explore Florida\'s Parks')
    .should('be.visible')
  })
  it('As a user, I should visit the page and see parks cards with names', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('div[class="parks-card"]')
    .should('contain', "Biscayne National Park" )
    .should('be.visible')
  })

  it('As a user, I should visit the page and see parks images', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('img[class="parks-card-image"]')
    .should('have.attr', 'src', 'Another.jpg')
    .should('be.visible')
  })

  it('As a user, I should be able to click a park card and the see the url change to reflect that park\'s code', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.visit('http://localhost:3000/bisc')
    .url()
    .should('eq', 'http://localhost:3000/bisc')
  })

  it('As a user, I should see a footer', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('footer')
    .should('be.visible')
    .should('contain', '©2022 Explorida by Jess Fatta')
    .should('contain', 'Surrender to the Flo...')
  })

  it('As a user, if the server is down, I will see an error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?*', {
        statusCode: 400,
        ok: false
      }).as('matchedUrl')
      cy.visit('http://localhost:3000/')
      .get('h2[class="loading-error-message"]')
      .contains('Something went wrong!')
})
})