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
    .should('contain', 'Info about Biscayne National Park: Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too; from prehistoric tribes to shipwrecks, and pineapple farmers to presidents. For many, the park is a boating, fishing, and diving destination, while others enjoy a warm breeze and peaceful scenery.')
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
    .should('contain', 'Location: The Dante Fascell Visitor Center may be reached from the Florida Turnpike by taking Exit 6 (Speedway Boulevard). Turn left from exit ramp and continue south to SW 328th Street (North Canal Drive). Turn left on 328th Street and continue for four miles to the end of the road. The park entrance is on the left just before the entrance to Homestead Bayfront Marina.')
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
    .should('contain', "Weather Info: The park is situated in a subtropical climate, which ensures sunshine year-round. Winters are normally dry and mild, with occasional fronts bringing wind and little rain. Summer brings hot and humid weather with scattered thunderstorms in the afternoons. The average temperature in January is 68 degrees Fahrenheit and 82 in July. The average rainfall for the area is 2.17 inches in January and 3.95 inches in July. June to November is hurricane season.")
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
})