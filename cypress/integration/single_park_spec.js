describe('Single Park', () => {
  it('As a user, I should be able to click a park card and the see the url change to reflect that park\'s code', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    .url()
    .should('eq', 'http://localhost:3000/bisc')
  })

  it("As a user, after clicking on a park, I should be able to see a card with the park name", () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'singlePark.json'
    }).as('matchedUrl')
    //cy.fixture('cypress/fixtures/singlePark.json')
    .get('p[class="full-name-single-view"]')
    .should('contain', 'Biscayne National Park')

  })

  it("As a user, after clicking on a park, I should be able to see a card with park info", () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'singlePark'
    }).as('matchedUrl')
    .get('p[class="info"]')
    .should('contain', 'Info about Biscayne National Park: ')
  })

  it("As a user, after clicking on a park, I should be able to see a card with location info", () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'singlePark'
    }).as('matchedUrl')
    .get('p[class="location"]')
    .should('contain', 'Location: ')
  })

  it("As a user, after clicking on a park, I should be able to see a card with weather info", () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'singlePark'
    }).as('matchedUrl')
    .get('p[class="weather"]')
    .should('contain', 'Weather Info: ')
  })


  it('As a user, I should be able to click Explorida to return to the home page', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('p[class="full-name"]')
    .first()
    .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'singlePark'
    }).as('matchedUrl')
    .get('div[class="title"]')
    .contains("Explorida")
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })


  it('As a user, if the server is down, I will see an error', () => {
    // cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?*', {
    //     statusCode: 400,
    //     ok: false
    //   }).as('matchedUrl')
    //   cy.visit('http://localhost:3000/')
    //   .get('p[class="full-name"]')
    //   .first()
    //   .click()
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 400,
      ok: false
      
    }).as('matchedUrl')
        cy.visit('http://localhost:3000/')

      .get('h2[class="loading-error-message"]')
      .contains('Something went wrong!')
})
})